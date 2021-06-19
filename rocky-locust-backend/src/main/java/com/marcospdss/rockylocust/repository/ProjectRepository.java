package com.marcospdss.rockylocust.repository;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.enterprise.context.ApplicationScoped;

import com.marcospdss.rockylocust.model.Project;

// h2 memory not work in native quarkus - simulate jdbc
// public interface ProjectRepository extends CrudRepository<Project, Long> {}

@ApplicationScoped
public class ProjectRepository {
	
	private Map<Long, Project> projects = new HashMap<>();
	private Long seq = 0l;
	
	public Iterable<Project> findAll() {
		return Collections.unmodifiableCollection(projects.values());
	}
	
	public Project save(Project project) {
		seq++;
		project.setId(seq);
		projects.put(seq, project);
		return project;
	}
	
	public void deleteById(Long id) {
		projects.remove(id);
	}
}