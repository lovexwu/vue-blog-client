import blog from '@/api/blog'

export default {
    data () {
      return {
        blogId: null,
        title: '',
        description: '',
        content: '',
        atIndex: false,
        titleNumber: 0,
        descriptionNumber: 0,
        contentNumber:''
      }
    },
    
    created(){
      this.blogId = this.$route.params.blogId
      blog.getDetail({blogId: this.blogId}).then(res =>{
        this.title = res.data.title
        this.content = res.data.content
        this.description = res.data.description
        this.atIndex = res.data.atIndex

        this.titleNumber = 0 + res.data.title.length
        this.descriptionNumber = 0 + res.data.description.length
        this.contentNumber = res.data.content.length
      })
    },

    methods:{
      onEdit(){
        blog.updateBlog({ blogId: this.blogId }, {
          title: this.title,
          content: this.content,
          description: this.description,
          atIndex: this.atIndex
        })
        .then(res => {
          console.log(res);
          this.$message.success(res.msg)
          this.$router.push({path: `/detail/${res.data.id}`})
        })
      },

      titleTotal(){
        let n = this.title.length
        this.titleNumber = n
        if(this.titleNumber === 30){
          this.$message.warning('不可以再输入了')
        }
      },

      descriptionTotal(){
        let n = this.description.length
        this.descriptionNumber = n
        if(this.descriptionNumber === 90){
          this.$message.warning('不可以再输入了')
        }
      },

      contentTotal(){
        this.contentNumber = this.content.length
        console.log(this.content.length);
      }
    }
  }
