/* Operator precedence
    Precedência de operadores

    *grouping                ( )
    *negação e incremento    ! ++ --
    *multiplicação e divisão * /
    *adição e subtração      + -
    *relacional              < << > >=
    *igualdade               == != === !==
    *AND                     &&
    *OR                      ||
    *condicional             ?:
    *assignment (atribuição) = += -= *=
 */

    console.log((2 + 5) * 10);
    console.log(3 > 2 > 1); // 3>2 = true, true>1 = false
    console.log(3 > 2 && 2 > 1);
