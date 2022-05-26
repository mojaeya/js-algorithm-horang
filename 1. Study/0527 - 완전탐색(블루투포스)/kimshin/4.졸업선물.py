def sol(m,product):
    answer=0
    n=len(product)
    product.sort(key=lambda x:(x[0]+x[1]))
    for i in range(n):
        money = m-(product[i][0] // 2 + product[i][1])
        cnt=1
        for j in range(n):
            if j != i and product[j][0] + product[j][1] > money:
                break
            if j != i and product[j][0] + product[j][1] <= money:
                money -= product[j][0] + product[j][1]
                cnt+=1
        answer = max(answer,cnt)
    return answer



arr=[
    [6,6],
    [2,2],
    [4,3],
    [4,5],
    [10,3]
]
print(sol(28,arr))

# https://soraji.github.io/code/2021/04/19/JS33/