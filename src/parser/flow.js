/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[2,10],$V2=[1,14],$V3=[1,15],$V4=[1,11],$V5=[6,9],$V6=[11,26,27,35],$V7=[11,30],$V8=[11,18,21,23,30],$V9=[11,18,21,23,26,27,30],$Va=[26,27],$Vb=[1,41],$Vc=[20,22,24,34],$Vd=[26,27,34],$Ve=[1,66],$Vf=[1,61],$Vg=[1,64],$Vh=[1,63],$Vi=[1,67],$Vj=[1,62],$Vk=[1,65],$Vl=[1,71],$Vm=[11,39],$Vn=[9,11,26,27,30,37,39,41,42];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"graphConfig":4,"statements":5,"EOF":6,"spaceList":7,"GRAPH":8,"SPACE":9,"DIR":10,"SEMI":11,"statement":12,"verticeStatement":13,"styleStatement":14,"vertex":15,"link":16,"alphaNum":17,"SQS":18,"text":19,"SQE":20,"PS":21,"PE":22,"DIAMOND_START":23,"DIAMOND_STOP":24,"alphaNumToken":25,"ALPHA":26,"NUM":27,"linkStatement":28,"arrowText":29,"MINUS":30,"ARROW_POINT":31,"ARROW_CIRCLE":32,"ARROW_CROSS":33,"PIPE":34,"STYLE":35,"stylesOpt":36,"HEX":37,"style":38,"COMMA":39,"styleComponent":40,"COLON":41,"UNIT":42,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",8:"GRAPH",9:"SPACE",10:"DIR",11:"SEMI",18:"SQS",20:"SQE",21:"PS",22:"PE",23:"DIAMOND_START",24:"DIAMOND_STOP",26:"ALPHA",27:"NUM",30:"MINUS",31:"ARROW_POINT",32:"ARROW_CIRCLE",33:"ARROW_CROSS",34:"PIPE",35:"STYLE",37:"HEX",39:"COMMA",41:"COLON",42:"UNIT"},
productions_: [0,[3,3],[3,4],[4,4],[5,3],[5,1],[7,2],[7,1],[12,2],[12,2],[13,0],[13,3],[13,1],[15,4],[15,4],[15,4],[15,1],[17,1],[17,2],[25,1],[25,1],[16,2],[16,1],[28,3],[28,3],[28,3],[28,3],[29,3],[19,3],[19,3],[19,2],[19,1],[14,5],[14,5],[36,1],[36,3],[38,1],[38,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 2:
this.$=$$[$0-3];
break;
case 3:
 console.log('In graph config');yy.setDirection($$[$0-1]);this.$ = $$[$0-1];
break;
case 11:
 console.log('In vertexStatement');yy.addLink($$[$0-2],$$[$0],$$[$0-1]);this.$ = 'oy'
break;
case 12:
console.log('In vertexStatement ... ');this.$ = 'yo';
break;
case 13:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'square');
break;
case 14:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'round');
break;
case 15:
this.$ = $$[$0-3];yy.addVertex($$[$0-3],$$[$0-1],'diamond');
break;
case 16:
console.log('In vertex'); this.$ = $$[$0];yy.addVertex($$[$0]);
break;
case 17: case 19: case 20: case 36:
this.$=$$[$0];
break;
case 18:
this.$=$$[$0-1]+''+$$[$0];
break;
case 21:
$$[$0-1].text = $$[$0];this.$ = $$[$0-1];
break;
case 22: case 31:
this.$ = $$[$0];
break;
case 23:
this.$ = {"type":"arrow"};
break;
case 24:
this.$ = {"type":"arrow_circle"};
break;
case 25:
this.$ = {"type":"arrow_cross"};
break;
case 26:
this.$ = {"type":"arrow_open"};
break;
case 27:
console.log('Nice link text here: '+$$[$0-1]);this.$ = $$[$0-1];
break;
case 28:
this.$ = $$[$0-2] + ' ' +$$[$0];
break;
case 29:
this.$ = $$[$0-2] + '-' +$$[$0];
break;
case 30:
this.$ = $$[$0-1];
break;
case 32:
this.$ = $$[$0-4];yy.addVertex($$[$0-2],undefined,undefined,$$[$0]);
break;
case 33:
console.log('In parser - style: '+$$[$0]);this.$ = $$[$0-4];yy.updateLink($$[$0-2],$$[$0]);
break;
case 34:
this.$ = [$$[$0]]
break;
case 35:
$$[$0-2].push($$[$0]);this.$ = $$[$0-2];
break;
case 37:
this.$ = $$[$0-1] + $$[$0];
break;
case 38: case 39: case 40: case 41: case 42: case 43: case 44:
this.$=$$[$0]
break;
}
},
table: [{3:1,4:2,8:[1,3]},{1:[3]},{5:4,7:5,9:$V0,11:$V1,12:6,13:8,14:9,15:10,17:12,25:13,26:$V2,27:$V3,35:$V4},{9:[1,16]},{6:[1,17],7:18,9:$V0},{5:19,11:$V1,12:6,13:8,14:9,15:10,17:12,25:13,26:$V2,27:$V3,35:$V4},o($V5,[2,5]),o($V6,[2,7],{7:20,9:$V0}),{11:[1,21]},{11:[1,22]},{11:[2,12],16:23,28:24,30:[1,25]},{9:[1,26]},o($V7,[2,16],{18:[1,27],21:[1,28],23:[1,29]}),o($V8,[2,17],{25:13,17:30,26:$V2,27:$V3}),o($V9,[2,19]),o($V9,[2,20]),{10:[1,31]},{1:[2,1]},{11:$V1,12:32,13:8,14:9,15:10,17:12,25:13,26:$V2,27:$V3,35:$V4},{6:[1,33],7:18,9:$V0},o($V6,[2,6]),o($V5,[2,8]),o($V5,[2,9]),{15:34,17:12,25:13,26:$V2,27:$V3},o($Va,[2,22],{29:35,34:[1,36]}),{30:[1,37]},{26:[1,38],37:[1,39]},{19:40,26:$Vb},{19:42,26:$Vb},{19:43,26:$Vb},o($V8,[2,18]),{11:[1,44]},o($V5,[2,4]),{1:[2,2]},{11:[2,11]},o($Va,[2,21]),{19:45,26:$Vb},{30:[1,49],31:[1,46],32:[1,47],33:[1,48]},{9:[1,50]},{9:[1,51]},{20:[1,52]},o($Vc,[2,31],{9:[1,53],30:[1,54]}),{22:[1,55]},{24:[1,56]},o([9,11,26,27,35],[2,3]),{34:[1,57]},o($Vd,[2,23]),o($Vd,[2,24]),o($Vd,[2,25]),o($Vd,[2,26]),{9:$Ve,26:$Vf,27:$Vg,30:$Vh,36:58,37:$Vi,38:59,40:60,41:$Vj,42:$Vk},{9:$Ve,26:$Vf,27:$Vg,30:$Vh,36:68,37:$Vi,38:59,40:60,41:$Vj,42:$Vk},o($V7,[2,13]),o($Vc,[2,30],{19:69,26:$Vb}),{19:70,26:$Vb},o($V7,[2,14]),o($V7,[2,15]),o($Va,[2,27]),{11:[2,32],39:$Vl},o($Vm,[2,34],{40:72,9:$Ve,26:$Vf,27:$Vg,30:$Vh,37:$Vi,41:$Vj,42:$Vk}),o($Vn,[2,36]),o($Vn,[2,38]),o($Vn,[2,39]),o($Vn,[2,40]),o($Vn,[2,41]),o($Vn,[2,42]),o($Vn,[2,43]),o($Vn,[2,44]),{11:[2,33],39:$Vl},o($Vc,[2,28]),o($Vc,[2,29]),{9:$Ve,26:$Vf,27:$Vg,30:$Vh,37:$Vi,38:73,40:60,41:$Vj,42:$Vk},o($Vn,[2,37]),o($Vm,[2,35],{40:72,9:$Ve,26:$Vf,27:$Vg,30:$Vh,37:$Vi,41:$Vj,42:$Vk})],
defaultActions: {17:[2,1],33:[2,2],34:[2,11]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

/*define('parser/mermaid',function(){
    return parser;
});*//* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 35;
break;
case 1:return 8;
break;
case 2:return 10;
break;
case 3:return 10;
break;
case 4:return 37;
break;
case 5:return 27;
break;
case 6:return 'BRKT';
break;
case 7:return 42;
break;
case 8:return 42;
break;
case 9:return 42;
break;
case 10:return 41;
break;
case 11:return 30;
break;
case 12:return 11;
break;
case 13:return 39;
break;
case 14:return 33;
break;
case 15:return 31;
break;
case 16:return 32;
break;
case 17:return 26;
break;
case 18:return 34;
break;
case 19:return 21;
break;
case 20:return 22;
break;
case 21:return 18;
break;
case 22:return 20;
break;
case 23:return 23
break;
case 24:return 24
break;
case 25:return 9;
break;
case 26:return 'NEWLINE';
break;
case 27:return 6;
break;
}
},
rules: [/^(?:style\b)/,/^(?:graph\b)/,/^(?:LR\b)/,/^(?:TD\b)/,/^(?:#[a-f0-9]+)/,/^(?:[0-9]+)/,/^(?:#)/,/^(?:px\b)/,/^(?:pt\b)/,/^(?:dot\b)/,/^(?::)/,/^(?:-)/,/^(?:;)/,/^(?:,)/,/^(?:[x])/,/^(?:>)/,/^(?:[o])/,/^(?:[a-zåäöæøA-ZÅÄÖÆØ]+)/,/^(?:\|)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:\s)/,/^(?:\n)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}