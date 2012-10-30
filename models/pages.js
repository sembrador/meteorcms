/* Pages Model
 * 
 * Pages Collection
 * page: page
 * title: title
 * content: html for the page with handlebar support
 * resource: for acl
 * categories: ...
 * tags: ...
 */

Pages = new Meteor.Collection('pages');

if (Meteor.isClient) {
	Meteor.subscribe("pages");
}
if (Meteor.isServer) {
	Meteor.publish("pages", function () { return Pages.find({}, {fields: {page: 1, title: 1, content: 1, resource: 1, categories: 1, tags: 1}}); });
}
