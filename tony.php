<?php

$message ='{1:F01ACTZTZT0AXXX1011111222}{2:I103CORUTZT0XXXXN}{3:{103:TIS}{113:NNNN}{108:001MSOG21190005M}{121:5f99ea71-4e15-42ad-a72a-cd4f23c9f2c8}}{4::20:ABT6000:23B:CRED:32A:210615TZS20260:33B:TZS200250:50K:/00100737NTONSITE TESP O BOX 95068KIONONDONIDAR ES SALAAM:57A:TANZTZT0:59:/015250048170NGOPAL TEST:70:PAYMENT FOR AID:71A:OUR-}';


split($message);

function split($message){
	$message_parsed = explode('4::',$message);
	$limit = sizeof($message_parsed);
	$info = array();

	for($i=1; $i < $limit; $i++){
		$break = explode(':',$message_parsed[$i]);
		$start = array();
		
		$start[$break[0]] = $break[1];
		$start['transactionReference'] = $break[1];
		unset($start[$break[0]]);

		$start[$break[2]] = $break[3];
		$start['transactionType'] = $break[3];
		unset($start[$break[2]]);

		$start[$break[4]] = $break[5];
		$start['transactionDetails'] = $break[5];
		unset($start[$break[4]]);

		$start[$break[6]] = $break[7];
		$start['moreDetails'] = $break[7];
		unset($start[$break[6]]);

		$start[$break[8]] = $break[9];
		$start['accountDetails'] = $break[9];
		unset($start[$break[8]]);

		$start[$break[10]] = $break[11];
		$start['sender'] = $break[11];
		unset($start[$break[10]]);

		$start[$break[12]]= $break[13];
		$start['nameBeneficiary'] = $break[13];
		unset($start[$break[12]]);

		$start[$break[14]]= $break[15];
		$start['paymentDescription'] = $break[13];
		unset($start[$break[12]]);

		$start[$break[16]] = explode('}',$break[17])[0];
		$start['fees'] = $start[$break[16]];
		unset($start[$break[16]]);

		array_push($info,$start);
	}
	foreach ($info as $data) {
		print_r($data);
	}
}
?>