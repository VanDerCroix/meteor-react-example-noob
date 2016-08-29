import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Random } from 'meteor/random';

export const Mons = new Mongo.Collection('mons');

if (Meteor.isServer) {
	Meteor.publish('mons', function monsPublication() {
		return Mons.find({
      owner: this.userId
    });
	});
}

Meteor.methods({
	'mons.insert'(entry, name) {
		// check(entry, Match.Integer);
		check(name, String);


		if (! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Mons.insert({
			entry: parseInt(entry,10),
			url: "mons/"+entry+".png",
			cp: 0,
			name: name,
			owner: this.userId,
			username: Meteor.users.findOne(this.userId).username,
		});
	},
	'mons.remove'(monId) {
		check(monId, String);

		Mons.remove(monId);
	},
	'mons.powerUp'(monId) {
		check(monId, String);

		Mons.update(monId, {
			$inc: { cp: Math.floor(Random.fraction() * 10) },
		});
	},
});
