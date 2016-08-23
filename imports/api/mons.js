import { Mongo } from 'meteor/mongo';

export const Mons = new Mongo.Collection('mons');

if (Meteor.isServer) {
	Meteor.publish('mons', function monsPublication() {
		return Mons.find({
      owner: this.userId
    });
	});
}
