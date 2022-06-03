def sol(s):
    answer=''
    sH=dict()
    for x in s:
        if x in sH:
            sH[x]=sH.get(x)+1
        else:
            sH[x]=1
    max = -10000000
    for key,value in sH.items():
        if value>max:
            max=value
            answer = key
    return answer


str = 'BACBACCACCBDEDE'
print(sol(str))