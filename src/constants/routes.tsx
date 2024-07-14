import type { Routes as RoutesType } from "../Router/types"
import { Tabs } from "../projects/tabs"
import { TicTacToe } from "../projects/tic-tac-toe"
import { UserInputs } from "../projects/user-inputs"
import { Wordle } from "../projects/wordle"

export const Routes: RoutesType = [
  ['Tabs', '#tabs', <Tabs />],
  ['Tic Tac Toe', '#tic-tac-toe', <TicTacToe />],
  ['Wordle', '#wordle', <Wordle />],
  ['User Inputs', '#user-inputs', <UserInputs />]
]