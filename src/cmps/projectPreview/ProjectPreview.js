import React, { Component } from 'react';
import './ProjectPreview.css';

class ProjectPreview extends Component {
    state = {
        project: this.props.project
    }
    render() {
        const project = this.state.project;
        var imgSrc = project.src;
        if (!project.src) imgSrc = 'img/adi.png';
        else imgSrc = project.src;
        const imgStyle = {
            backgroundImage: 'url(' + imgSrc + ')',
        }
        return (
            <div className="project-preview flex column">
                <div className="project-title flex">
                    <p className="project-name">{project.name}</p>
                    <p>{project.subName}</p>
                </div>
                <a href={project.href} target="_blank">
                    <div style={imgStyle} className="a-img"></div>
                </a>
                <p className="desc">{project.desc}</p>
                <div className="preview-bottom flex column">
                    <ul className="ul-labels flex">
                        {project.labels.map(label => (
                            <li className="label" key={label}>{label}</li>
                            ))}
                    </ul>
                    <div className="links flex">
                        <a href={project.href} target="_blank">site</a>
                        <a href={project.code} target="_blank">code</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProjectPreview;
