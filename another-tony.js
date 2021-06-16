function convert(input) {
    console.log('incoming: ', input)
    input = input.split('4::')

    let myInfo = []

    for (let i = 1; i < input.length; i++) {
        let breakThr = input[i].split(':')
        let myObj = {}

        myObj[breakThr[0]] = breakThr[1]
        myObj[breakThr[2]] = breakThr[3]
        myObj[breakThr[4]] = breakThr[5]
        myObj[breakThr[6]] = breakThr[7]
        myObj[breakThr[8]] = breakThr[9]
        myObj[breakThr[10]] = breakThr[11]
        myObj[breakThr[12]] = breakThr[13]
        myObj[breakThr[14]] = breakThr[15]
        myObj[breakThr[16]] = breakThr[17].split('}')[0]

        myInfo.push(myObj)
    }
    console.log('myInfo:: ',myInfo)

}

myStr =
    '{1:F01ACTZTZT0AXXX1011111222}{2:I103CORUTZT0XXXXN}{3:{103:TIS}{113:NNNN}{108:001MSOG21190005M}{121:5f99ea71-4e15-42ad-a72a-cd4f23c9f2c8}}{4::20:ABT6000:23B:CRED:32A:210615TZS20260:33B:TZS200250:50K:/00100737NTONSITE TESP O BOX 95068KIONONDONIDAR ES SALAAM:57A:TANZTZT0:59:/015250048170NGOPAL TEST:70:PAYMENT FOR AID:71A:OUR-}{1:F01ACTZTZT0AXXX1011111222}{2:I103CORUTZT0XXXXN}{3:{103:TIS}{113:NNNN}{108:001MSOG21190005M}{121:5f99ea71-4e15-42ad-a72a-cd4f23c9f2c8}}{4::20:ACT000900:23B:CRED:32A:210615TZS20260:33B:TZS200250:50K:/00100737NTONSITE TESP O BOX 95068KIONONDONIDAR ES SALAAM:57A:TANZTZT0:59:/015250048170NGOPAL TEST:70:PAYMENT FOR AID:71A:OUR-}';

convert(myStr);
