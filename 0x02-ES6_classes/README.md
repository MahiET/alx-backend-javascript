ES6 classes
=

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: classexpressions and class declarations.

      class Rectangle {
        constructor(height, width) {
         this.height = height;
         this.width = width;
        }
       }

Class expressions
=
A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. However, it can be accessed via the name property.

Metaprogramming in ES6
=
Metaprogramming is (loosely) all about the underlying mechanics of the language, rather than “high level” data modelling or business logic. If programming can be described as “making programs”, metaprogramming could be described as “making programs making programs” - or something. You probably use metaprogramming every day perhaps without even noticing it.

Metaprogramming has a few “subgenres” - one is Code Generation, aka eval & friends - which JavaScript has had since its inception (JS had eval in ES1, even before it got try/catch or switch statements). Pretty much every other language you’d reasonably use today has code generation features.

Another facet of metaprogramming is Reflection - finding out about and adjusting the structure and semantics of your application. JavaScript has quite a few tools for Reflection. Functions have Function#name and Function#length, as well as Function#bind, Function#call, and Function#apply. All of the available methods on Object are Reflection, e.g. Object.getOwnProperties (As an aside, Reflection tools that don’t alter code, but instead gather information about it are often called Introspection). We also have Reflection/Introspection operators, like typeof, instanceof, and delete.

               class BoringClass
                end
               class CoolClass
                def ==(other_object)
                 other_object.is_a? CoolClass
                   end
               end
                BoringClass.new == BoringClass.new #=> false
                 CoolClass.new == CoolClass.new #=> true!

