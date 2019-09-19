package com.marcospdss.rockylocust.resource;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.marcospdss.rockylocust.model.Project;
import com.marcospdss.rockylocust.repository.ProjectRepository;

@Path("/projects")
public class ProjectResource {

	private final ProjectRepository projectRepository;

	public ProjectResource(ProjectRepository projectRepository) {
		this.projectRepository = projectRepository;
	}

	@GET
	@Produces("application/json")
	public Iterable<Project> findAll() {
		return projectRepository.findAll();
	}

	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") long id) {
		projectRepository.deleteById(id);
	}

	@POST
	@Path("/name/{name}")
	@Produces("application/json")
	public Project create(@PathParam("name") String name) {
		return projectRepository.save(new Project(name));
	}
}