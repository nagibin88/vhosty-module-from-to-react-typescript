// Saga пустая т.к нет ассинхроных запросов или какой-либо бизнес логики.

export function* rootSaga() {
    console.log("saga run");
}

export type RootSaga = ReturnType<typeof rootSaga>;
