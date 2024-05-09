

## Splitwise Requirment

- Users can split the bill
- Split by
  - precentage
  - split by
  - exact amount
  - byshare
- Settle the bill
- User can create group
  - Add members to group
  - Add bill in group by above method
  - Group member relations should be seprate from individuals


## Entity

User

- id
- name
- email

group

- id
- name
- description

group_members

- id
- user_id
- group_id

expense

- id
- name
- description
- totalAmount
- split_type
- payer_id
- group_id

expense_participation

- id
- expense_id
- user_id
- owed_amount
- paid_amount

Transactions

- id
- user_from
- user_to
- decriptions
- amount


Questions

Q. Get How much i owe/len ?

- userId: 1
- Get friends ids (2, 3, 4)
- Get all the expenses paticpants where userId = 1
- Join this with expense wher ep.expense_id = e.id
- group by u.user_id and friends.id

> Get all the expense where userId
>
> - check how much
> - expense
>   - paidby A
>   - amount 200
> - expense participatant
>   - user_id A
>   - owedAmount 0
>   - paid anount 0
>   - user_id b
>   - owedAmout 100
>   - paidAmout 0
>
> 1. a => b => e.payerIdA  => sum(+ep.owedAmout) else sum(-ep.owedAmout)

Q2. How to suppport bill paid by multiple users
