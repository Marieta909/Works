function LCS(str1, str2){
    const n1=str1.length
    const n2=str2.length
    const matrix= Array(n1+1).fill(0).map(() => Array(n2+1).fill(0))
    var max=0, m
    var str=""
    for(i=1; i<=n1; i++){ 
        for(j=1;j<=n2; j++){
            if(str1[i-1]==str2[j-1]){
                matrix[i][j] = 1 + matrix[i-1][j-1]
                if(matrix[i][j]>max){
                    max=matrix[i][j]
                   m=i
                }
            }
        
        }
    }
    for(i=m-max; i<m; i++){
        str+=str1[i]
    }
    return str
}
console.log(LCS('java1','javascrypt'))