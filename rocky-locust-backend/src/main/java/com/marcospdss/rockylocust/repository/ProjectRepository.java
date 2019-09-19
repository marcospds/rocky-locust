package com.marcospdss.rockylocust.repository;

import org.springframework.data.repository.CrudRepository;

import com.marcospdss.rockylocust.model.Project;

public interface ProjectRepository extends CrudRepository<Project, Long> {
}
