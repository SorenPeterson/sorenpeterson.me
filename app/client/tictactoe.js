/*Minimax = function(board) {
	return _(board.possible_moves()).filter(function(move) {
		var test_board = board.clone();
		test_board.play(move);
		var score = Score(test_board, 'x');
		return score === 1;
	});
}

Score = function(board, player) {
	if(board.finished()) {
		return board.winner() === player ? 1 : -1;
	} else {
		var scores = _(board.possible_moves()).map(function(move) {
			var test_board = board.clone();
			test_board.play(move);
			return Score(test_board, player);
		});
		if(board.turn.get() === player) {
			return _(scores).any(function(score) {
				return score === -1;
			}) ? -1 : 0;
		} else {
			return _(scores).any(function(score) {
				return score === 1;
			}) ? 1 : 0;
		}
	}
}*/

var board;
var difficulty;

Template.Board.onCreated(function() {
	board = new Board();
	window.theboard = board;
	difficulty = new ReactiveVar('0');
});

Template.Board.helpers({
	rows: function() {
		var doge = _([0, 1, 2]).map(function(item) {
			var row = board.state.get().slice(item*3,(item+1)*3);
			row = _(row).map(function(original, index) {
				return {
					index: item*3+index,
					value: original
				}
			});
			return row;
		});
		return doge;
	},
	gameOver: function() {
		return board.finished();
	},
	winner: function() {
		return board.winner();
	},
	difficulty: function() {
		return difficulty.get();
	},
});

Template.Board.events({
	'click .spot': function(evt, tmpl) {
		var position = new Number(evt.target.closest('.spot').dataset.id);
		if(board.play(position) && !board.finished()) {
			board.chooseMove();
		}
	},
});

Template.GameOver.helpers({
	gameOver: function() {
		return board.finished();
	},
	winner: function() {
		return board.winner();
	},
});

Template.GameOver.events({
	'click .restart': function() {
		board.reset();
	},
});

Template.PickSide.helpers({
	started: function() {
		return board.started.get();
	}
});

Template.PickSide.events({
	'click .pick.x': function() {
		board.started.set(true);
	},
	'click .pick.o': function() {
		board.started.set(true);
		board.chooseMove();
	},
});

var setDifficulty = _(function(value) {
	difficulty.set(value);
}).throttle(200);

var level = new ReactiveVar(0);

Template.Difficulty.events({
	'input input[type=range]': function(evt, tmpl) {
		setDifficulty(evt.target.value === '0' ? '0' : (evt.target.max - evt.target.value + 1));
		level.set(evt.target.value);
	},
});

Template.Difficulty.helpers({
	level: function() {
		return level.get();
	}
});

