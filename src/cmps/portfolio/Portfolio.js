import React, { Component } from 'react';
import './Portfolio.css';
import ProjectPreview from '../projectPreview/ProjectPreview';
import ProjService from '../../ProjService'

class Portfolio extends Component {
    state = {
        projects: []
    }
    componentDidMount() {
        const projectsList = ProjService.getProjects();
        this.setState({projects: projectsList});        
    }
    render() {
        return (
    <div className="portfolio">
        <h1>portfolio</h1>
        <ul className="portfolio-list flex">
            {this.state.projects && this.state.projects.map(project => (
                <li className="proj-list" key={project.id}>
                    <ProjectPreview project={project} />
                </li>
            ))}
        </ul>
    </div>

)
    }
}
export default Portfolio;
