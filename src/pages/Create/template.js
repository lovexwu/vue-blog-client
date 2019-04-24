import blog from '@/api/blog'

export default {
    data () {
      return {
        title: '',
        description: '',
        content: '',
        atIndex: false,
        titleNumber: 0,
        descriptionNumber: 0,
        contentNumber: 0
      }
    },

    methods:{
      onCreate(){
        blog.createBlog({
          title: this.title,
          content: this.content,
          description: this.description,
          atIndex: this.atIndex
        })
        .then(res => {
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
