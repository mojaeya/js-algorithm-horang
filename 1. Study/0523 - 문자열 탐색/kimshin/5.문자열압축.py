n=list(map(str,input()))
n.append('')
answer = ''

cnt=1;

for i in range(len(n)-1):
    if n[i] == n[i+1]:
        cnt+=1
    else:
        answer+=n[i]
        if cnt>1:
            answer += str(cnt)
            cnt=1
print(answer)


# https://velog.io/@loopbackseal/CODE-KATA-22