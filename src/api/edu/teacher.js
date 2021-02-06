import request from '@/utils/request'

export default {
  // 1 讲师列表（条件查询分页）
  // current当前页 limit每页记录数 teacherQuery条件对象
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      // url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
      url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      // teacherQuery条件对象，后端使用RequestBody获取数据
      // data表示把对象转换json进行传递到接口里面
      data: teacherQuery
    })
  },

  /**
   * 删除讲师
   * @param id
   */
  deleteTeacherId(id) {
    return request({
      url: `/eduservice/teacher/${id}`,
      method: 'delete'
    })
  },

  /**
   * 添加讲师
   * @param teacher
   */
  addTeacher(teacher) {
    return request({
      url: `/eduservice/teacher/addTeacher`,
      method: 'post',
      data: teacher
    })
  },

  /**
   * 根据id查询讲师
   * @param id
   */
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/teacher/getTeacherById/${id}`,
      method: 'get'
    })
  },

  /**
   * 修改讲师
   * @param teacher
   */
  updateTeacherInfo(teacher) {
    return request({
      url: `/eduservice/teacher/updateTeacherById`,
      method: 'post',
      data: teacher
    })
  }
}
