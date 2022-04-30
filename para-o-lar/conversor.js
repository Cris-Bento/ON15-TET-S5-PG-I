//Professora Hanna, essa foi a forma que consegui fazer o exercício e
//conseguir fazer funcionar :)

    const transcricaoDna={
        'A':'U',
        'T':'A',
        'C':'G',
        'G':'C'
        }     
   
        function conversorRna(str) {
        let arr=[];
        str=str.split('');
        str.forEach((nucleotido)=>{
        arr.push(transcricaoDna[nucleotido])
        })
        return arr;
        }
       
        console.log(conversorRna("ATCG"));
    