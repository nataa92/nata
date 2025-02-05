package com.belajar;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
public class Latihan6 {
    public static void main(String[] args) throws IOException {
        String nama;
        int umur;
        //membuat objek inputstream
        InputStreamReader isr = new InputStreamReader(System.in);
        //membuat objek bufferredreader
        BufferedReader br = new BufferedReader(isr);
        //Mengisi variabel nama dengan BufferedReader
        System.out.print("Input nama Anda");
        nama = br.readLine();
        System.out.print("Input umur Anda");
        umur = Integer.parseInt(br.readLine());
        //Menampilkan output isi variabel nama
        System.out.println("Nama Anda adalah");
        System.out.println("Umur " + umur);
        }

    
}
