x = int(input())
if(x==1):
    cnt = 1
else:
    cnt = 2
    for i in range(2, x//2+1):
        if(x%i==0):
            cnt+=1
print(cnt)