import React, { Component } from 'react';
import {Link} from 'react-router-hash-link';
import './ProjectPreview.css';

// const ProjectPreview = ({ project }) => (
class ProjectPreview extends Component {
    state = {
        project: this.props.project
    }
    render() {
        const project = this.state.project;
        var imgSrc = project.src;
        if (!project.src) imgSrc = 'img/adi.png';
        else imgSrc = project.src;
        const hrefLink = project.href;
        const imgStyle = {
            backgroundImage: 'url(' + imgSrc + ')',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundrepeat: 'no-repeat',
        }
        return (
            <div className="project-preview">
                <p>{project.name}</p>
                <a href={project.href} target="_blank">
                    <div style={imgStyle} className="a-img"></div>
                </a>
                <p>{project.desc}</p>
                <ul className="ul-labels flex">
                    {project.labels.map(label => (
                        <li className="genre" key={label}>{label}</li>
                        ))}
                </ul>
                <a href={project.href} target="_blank">site</a>
                <a href={project.code} target="_blank">code</a>
            </div>
        )
    }
}
export default ProjectPreview;
