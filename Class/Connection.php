<?php

class Connection
{
    private $host = 'localhost';
    private $user = 'root';
    private $pass = '';
    private $name = 'Demis';

    public function link()
    {
        return mysqli_connect($this->host, $this->user, $this->pass, $this->name);
    }
}