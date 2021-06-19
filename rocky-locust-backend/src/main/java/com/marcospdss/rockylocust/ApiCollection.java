package com.marcospdss.rockylocust;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ApiCollection<T> {

	private List<T> items;

	public ApiCollection(List<T> items) {
		this.items = List.copyOf(items);
	}

	public List<T> getItems() {
		return Collections.unmodifiableList(items);
	}

	public static <T> ApiCollection<T> of(Iterable<T> items) {

		if (items == null)
			return null;

		List<T> list = new ArrayList<T>();
		items.iterator().forEachRemaining(list::add);

		return new ApiCollection<>(list);
	}
}
