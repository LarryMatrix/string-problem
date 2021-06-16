function convert(input) {
    input = JSON.stringify(input)
    input = input.split('4::20:')
    let myOtherInfo = []
    let myCredInfo = []
    let myInfo = []
    for (let i = 1; i < input.length; i++) {
        let myCred = input[i].split('CRED:')
        myInfo.push ({
            myOtherInfo: myOtherInfo.push(myCred[0]),
            myCredInfo: myCredInfo.push(myCred[1])
        })
    }
    console.log('my final data: ', myInfo)
}

myStr =
  '{1:F01ACTZTZT0AXXX1011111222}{2:I103CORUTZT0XXXXN}{3:{103:TIS}{113:NNNN}{108:001MSOG21190005M}{121:5f99ea71-4e15-42ad-a72a-cd4f23c9f2c8}}{4::20:ABT6000:23B:CRED:32A:210615TZS20260:33B:TZS200250:50K:/00100737NTONSITE TESP O BOX 95068KIONONDONIDAR ES SALAAM:57A:TANZTZT0:59:/015250048170NGOPAL TEST:70:PAYMENT FOR AID:71A:OUR-}{1:F01ACTZTZT0AXXX1011111222}{2:I103CORUTZT0XXXXN}{3:{103:TIS}{113:NNNN}{108:001MSOG21190005M}{121:5f99ea71-4e15-42ad-a72a-cd4f23c9f2c8}}{4::20:ACT000900:23B:CRED:32A:210615TZS20260:33B:TZS200250:50K:/00100737NTONSITE TESP O BOX 95068KIONONDONIDAR ES SALAAM:57A:TANZTZT0:59:/015250048170NGOPAL TEST:70:PAYMENT FOR AID:71A:OUR-}';

convert(myStr);
