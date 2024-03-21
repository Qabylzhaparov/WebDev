n = int(input())
cnt = 0
l = [int(i) for i in input().split()]
for i in range(len(l)):
    if(l[i]>0):
        cnt+=1
print(cnt)