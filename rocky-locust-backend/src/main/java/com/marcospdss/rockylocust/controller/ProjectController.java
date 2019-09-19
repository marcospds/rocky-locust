package com.marcospdss.rockylocust.controller;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.marcospdss.rockylocust.model.Project;
import com.marcospdss.rockylocust.repository.ProjectRepository;

@Path("/projects")
public class ProjectController {
 
	private final ProjectRepository projectRepository;

	public ProjectController(ProjectRepository projectRepository) {
		this.projectRepository = projectRepository;
	}

    @GET
    @Produces("application/json")
    public List<Project> getProjects() {
        return (List<Project>) projectRepository.findAll();
    }
    
	@POST 
    @Produces("application/json")
    public Project addProject(Project project) {
        return projectRepository.save(project);
    }

	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") long id) {
		projectRepository.deleteById(id);
	}
}