package com.marcospdss.rockylocust.repository;

import org.springframework.data.repository.CrudRepository;

import com.marcospdss.rockylocust.model.Host;

public interface HostRepository extends CrudRepository<Host, Long> {
}
