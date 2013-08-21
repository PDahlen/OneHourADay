function Tag(name) {
    var self = this;
    self.name = ko.observable(name);
}

function Resource(url, description, dateadded, tags) {
    var self = this;
    self.url = url;
    self.description = description;
    self.dateadded = dateadded;
    self.tags = tags;
}

function ResourcesViewModel() {
    var self = this;

    self.tags = [
        { name: "tag1" },
        { name: "tag2" },
        { name: "tag3" }
    ];

    self.resources = ko.observableArray([
        new Resource("url1", "description 1", "2013-08-22", "tag1, tag2"),
        new Resource("url2", "description 2", "2013-08-22", "tag2, tag3")
    ]);
}

ko.applyBindings(new ResourcesViewModel());