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
		$start[$break[2]] = $break[3];
		$start[$break[4]] = $break[5];
		$start[$break[6]] = $break[7];
		$start[$break[8]] = $break[9];
		$start[$break[10]] = $break[11];
		$start[$break[12]]= $break[13];
		$start[$break[14]]= $break[15];
		$start[$break[16]] = explode('}',$break[17])[0];
		array_push($info,$start);
	}
	foreach ($info as $data) {
		print_r($data);
	}
}
?>