import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Courses.css';
import asyncComponent from '../../hoc/asyncComponent';

// lazy loading
const AsyncCourse = asyncComponent(() => import('../Course/Course'));

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'ASP NET Core (ASP.NET 5),MVC 6,C#,Angular4 & EF Crash Course' },
            { id: 2, title: 'The Modern Python 3 Bootcamp' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
    }
    courseSelectHandler = course => {
        this.props.history.push({
            pathname: `${this.props.match.url}/${course.id}`,
            search: `?title=${encodeURIComponent(course.title)}`
        });
    }
    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                            <article 
                            className="Course" 
                            key={course.id} 
                            onClick={() => this.courseSelectHandler(course)}>
                                {course.title}
                            </article>
                        )})
                    }
                </section>
                <Route path={`${this.props.match.url}/:id`} exact component={AsyncCourse} />
            </div>
        );
    }
}

export default Courses;