/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
"style"               return 'STYLE';
"graph"               return 'GRAPH';
"LR"                  return 'DIR';
"TD"                  return 'DIR';
\#[a-f0-9]+           return 'HEX';
[0-9]+                return 'NUM';
\#                    return 'BRKT';
"px"                  return 'UNIT';
"pt"                  return 'UNIT';
"dot"                 return 'UNIT';
":"                   return 'COLON';
\-                    return 'MINUS';
";"                   return 'SEMI';
","                   return 'COMMA';
[x]                   return 'ARROW_CROSS';
">"                   return 'ARROW_POINT';
[o]                   return 'ARROW_CIRCLE';
[a-zåäöæøA-ZÅÄÖÆØ]+   return 'ALPHA';
"|"                   return 'PIPE';
"("                   return 'PS';
")"                   return 'PE';
"["                   return 'SQS';
"]"                   return 'SQE';
"{"                   return 'DIAMOND_START'
"}"                   return 'DIAMOND_STOP'
\s                    return 'SPACE';
\n                    return 'NEWLINE';
<<EOF>>               return 'EOF';

/lex

/* operator associations and precedence */

%left '^'

%start expressions

%% /* language grammar */

expressions
    : graphConfig statements EOF
    | graphConfig spaceList statements EOF
        {$$=$1;}
    ;

graphConfig
    : GRAPH SPACE DIR SEMI
        { console.log('In graph config');yy.setDirection($3);$$ = $3;}
    ;

statements
    : statements spaceList statement
    | statement
    ;

spaceList
    : SPACE spaceList
    | SPACE
    ;

statement
    : verticeStatement SEMI
    | styleStatement SEMI
    ;

verticeStatement:
    | vertex link vertex
        { console.log('In vertexStatement');yy.addLink($1,$3,$2);$$ = 'oy'}
    | vertex
        {console.log('In vertexStatement ... ');$$ = 'yo';}
    ;

vertex:  alphaNum SQS text SQE
        {$$ = $1;yy.addVertex($1,$3,'square');}
    | alphaNum PS text PE
        {$$ = $1;yy.addVertex($1,$3,'round');}
    | alphaNum DIAMOND_START text DIAMOND_STOP
        {$$ = $1;yy.addVertex($1,$3,'diamond');}
    | alphaNum
        {console.log('In vertex'); $$ = $1;yy.addVertex($1);}
    ;

alphaNum
    : alphaNumToken
    {$$=$1;}
    | alphaNumToken alphaNum
    {$$=$1+''+$2;}
    ;
alphaNumToken
    : ALPHA
    {$$=$1;}
    | NUM
    {$$=$1;}
    ;

link: linkStatement arrowText
    {$1.text = $2;$$ = $1;}
    | linkStatement
    {$$ = $1;}
    ;

linkStatement: MINUS MINUS ARROW_POINT
        {$$ = {"type":"arrow"};}
    | MINUS MINUS ARROW_CIRCLE
        {$$ = {"type":"arrow_circle"};}
    | MINUS MINUS ARROW_CROSS
        {$$ = {"type":"arrow_cross"};}
    | MINUS MINUS MINUS
        {$$ = {"type":"arrow_open"};}
    ;

arrowText:
    PIPE text PIPE
    {console.log('Nice link text here: '+$2);$$ = $2;}
    ;

// Characters and spaces
text: ALPHA SPACE text
        {$$ = $1 + ' ' +$3;}
    | ALPHA MINUS text
         {$$ = $1 + '-' +$3;}
    | ALPHA SPACE
        {$$ = $1;}
    | ALPHA
        {$$ = $1;}
    ;

styleStatement:STYLE SPACE ALPHA SPACE stylesOpt
    {$$ = $1;yy.addVertex($3,undefined,undefined,$5);}
    | STYLE SPACE HEX SPACE stylesOpt
          {console.log('In parser - style: '+$5);$$ = $1;yy.updateLink($3,$5);}
    ;

stylesOpt: style
        {$$ = [$1]}
    | stylesOpt COMMA style
        {$1.push($3);$$ = $1;}
    ;

style: styleComponent
    {$$=$1;}
    |style styleComponent
    {$$ = $1 + $2;}
    ;

styleComponent: ALPHA
    {$$=$1}
    | COLON
    {$$=$1}
    | MINUS
    {$$=$1}
    | NUM
    {$$=$1}
    | UNIT
    {$$=$1}
    | SPACE
    {$$=$1}
    | HEX
    {$$=$1}
    ;
%%
/*define('parser/mermaid',function(){
    return parser;
});*/