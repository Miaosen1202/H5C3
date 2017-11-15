<?php

    header("Content-type:text/html;charset=utf-8");
    $page = 'index';
    $html = '发现音乐网页内容';

    if(array_key_exists('page',$_GET)){
        $page = $_GET['page'];
    }

    if($page == 'friend'){
        $html = '朋友网页内容';
    }else if($page == 'my'){
        $html = '我的音乐网页内容';
    }

    echo '{"html":"'.$html.'","page":"'.$page.'"}';
?>