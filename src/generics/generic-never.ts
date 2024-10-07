//Generics x Never

// Very useful type in TS because it lets you express something that shouldn't be possible and usually they are bundled along with generics. It's like wanting to express a positive number and zero should not be part of that type set.

//You can think of extends (generic constraint) like equals T extends '' is like saying T is an empty string

type NoEmptyString<T extends string> = T extends '' ? never : T;

const prefixWithHello = <T extends string>(a: NoEmptyString<T>) => {
  return `hello ${a}`;
};

//fails on empty string!
// prefixWithHello('');
