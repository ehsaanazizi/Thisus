import React from 'react'

function CourseCard({course}) {

  return (
    <div>
      <div className="course-item">
                    <div className="course-item__img">
                         <img src="../images/img1.jpg"/>

                    </div>
                    < div className="course-item__detail">
                         <div className="course-item__body">
                              <div>
                                   <p className="title">{course.title}</p>
                                   <p className="desk">{course.description}</p>
                              </div>
                              <span className="rate">{course.rate}</span>
                         </div>
                         <div className="course-item__footer">
                              <div className="tags">
                                   <span className=" badge badge--secondary">React.js</span>
                                   <span className=" badge badge--secondary">Frontend</span>
                              </div>
                              <div className="caption">
                                   <div className="date">
                                   {new Date(course.start).toLocaleDateString("en-US",{
                                        month:"short",
                                        year:"numeric",
                                        day:"numeric",
}) }
                                   </div>
                                   <span className="badge badge--primary">{course.status}</span>
                              </div>

                         </div>
                    </div>
               </div>
  
    </div>
  )
}

export default CourseCard;

