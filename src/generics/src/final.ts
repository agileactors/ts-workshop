type AResponse = {
  aResponse: string[];
};

type BResponse = {
  bResponse: {
    b: string;
  };
};

type Key = 'A' | 'B';

type ResponseMap = {
  A: AResponse;
  B: BResponse;
};

type Response<T extends Key> = ResponseMap[T];

async function foo<T extends Key>(key: T): Promise<Response<T>> {
  const response = await fetch(`https://api.example.com/${key}`);
  const data = (await response.json()) as Response<T>;

  return data;
}

foo('A').then((data) => {
  console.log(data); //data is AResponse
});
