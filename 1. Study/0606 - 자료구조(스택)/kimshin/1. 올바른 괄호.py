def sol(s):
    answer = 'YES'
    stack=[]

    for x in s:
        if x == '(':
            stack.append(x)
        else:
            if len(stack) ==0:
                return 'NO'
            stack.pop()
    if len(stack) > 0:
        answer = 'NO'
    return answer

a = "(()(()))(()"
print(sol(a))

# https://velog.io/@soceu/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98section-6-2%EA%B4%84%ED%98%B8%EB%AC%B8%EC%9E%90%EC%A0%9C%EA%B1%B0%EC%8A%A4%ED%83%9D