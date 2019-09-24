package com.marcospdss.rockylocust.controller;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import com.marcospdss.rockylocust.model.Host;
import com.marcospdss.rockylocust.model.Project;
import com.marcospdss.rockylocust.repository.HostRepository;

@Path("/hosts")
public class HostController {
 
	private final HostRepository hostRepository;

	public HostController(HostRepository hostRepository) {
		this.hostRepository = hostRepository;
	}

    @GET
    @Produces("application/json")
    public List<Host> getHosts() {
        return (List<Host>) hostRepository.findAll();
    }
    
	@POST 
    @Produces("application/json")
    public Host addHost(Host host) {
        return hostRepository.save(host);
    }

	@DELETE
	@Path("{id}")
	public void delete(@PathParam("id") long id) {
		hostRepository.deleteById(id);
	}
}