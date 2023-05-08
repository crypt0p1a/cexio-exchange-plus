export type AnswerOk<T> = {
  ok: "ok"
  data: T
}

export type ExtractAnswer<P, T> = T extends [P, infer A] ? A : never

export type ExtractParam<T, PARAM> =
  T extends [infer P, infer A] ?
    PARAM extends P ? P : never
  : never

