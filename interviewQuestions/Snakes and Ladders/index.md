
## Snack Laddar Game

- Do it on only in application layer
- User can play the game
- User can see all his move history
- We can see user game History


#### Entity

- User

  - id
  - name
- Game

  - id
  - winner
  - played_at : Timestamp
- Game_Particpants

  - id
  - playerId
  - gameId
- User_Game_move

  - id
  - game_id
  - user_id
  - move
- Box

  - id
  - box_code
  - snake_head
  - snake_tail
