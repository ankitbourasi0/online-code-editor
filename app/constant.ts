export const LANGUAGE_VERSION = {
  typescript: "5.0.3",
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  cpp: "10.2.0",
  c: "10.2.0",
  csharp: "6.12.0",
  go: "1.16.2",
  rust: "1.68.2",
  swift: "5.3.3",
  kotlin: "1.8.20",
  ruby: "3.0.1",
  php: "8.2.3",
  dart: "2.19.6",
  scala: "3.2.2",
  r: "4.1.1",
  perl: "5.36.0",
  haskell: "9.0.1",
  lua: "5.4.4",
  clojure: "1.10.3",
  elixir: "1.11.3",
  julia: "1.8.5",
  groovy: "3.0.7",
  bash: "5.2.0",
  powershell: "7.1.4",
};

export const CODE_SNIPPETS = {
  clojure: `(println "Hello, World!")`,
  dart: `void main() {
    print('Hello, World!');
  }`,
  typescript: `console.log("Hello, World!");`,
  javascript: `console.log("Hello, World!");`,
  elixir: `IO.puts "Hello, World!"`,
  c: `#include <stdio.h>
  
  int main() {
      printf("Hello, World!\n");
      return 0;
  }`,
  cpp: `#include <iostream>
  
  int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
  }`,
  go: `package main
  
  import "fmt"
  
  func main() {
      fmt.Println("Hello, World!")
  }`,
  groovy: `println "Hello, World!"`,
  haskell: `main = putStrLn "Hello, World!"`,
  java: `public class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
  }`,
  kotlin: `fun main() {
      println("Hello, World!")
  }`,
  lua: `print("Hello, World!")`,
  csharp: `using System;
  
  class Program
  {
      static void Main()
      {
          Console.WriteLine("Hello, World!");
      }
  }`,

  perl: `print "Hello, World!\n";`,
  php: `<?php
  echo "Hello, World!";
  ?>`,
  powershell: `Write-Host "Hello, World!"`,
  python: `print("Hello, World!")`,
  r: `cat("Hello, World!\n")`,
  ruby: `puts "Hello, World!"`,
  rust: `fn main() {
      println!("Hello, World!");
  }`,
  scala: `object HelloWorld extends App {
    println("Hello, World!")
  }`,
  swift: `print("Hello, World!")`,
};
