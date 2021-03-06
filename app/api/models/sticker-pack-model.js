const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stickerPackSchema = Schema({
	name: {type: String, required: true, maxlength: 30},
	key: {type: String, unique: true, required: true, maxlength: 8},
	description: {type: String, required: true, maxlength: 110},
	icon: {type: String, default: null},
	published: {type: Boolean, default: false},
	listed: {type: Boolean, default: true},
	subscribers: {type: Number, default: 0},
	createdAt: {type: Date, default: Date.now},
	creatorId: {type: String, required: true},
	stickers: [{
		name: {type: String, required: true, maxlength: 20},
		url: {type: String, required: true},
		uses: {type: Number, default: 0},
		creatorId: {type: String, required: true, default: 'unknown'},
		createdAt: {type: Date, default: Date.now},	
		createdVia: {type: String, required: true, default: 'website'},
		groupType: {type: String, required: true, default: 'sticker-pack'},
		groupId: {type: String, required: true, default: 'unknown'}
	}]
});

const StickerPack = mongoose.model('StickerPack', stickerPackSchema);

module.exports = StickerPack;
