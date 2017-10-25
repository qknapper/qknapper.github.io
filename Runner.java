/*
 * Disc Golf Tracker v. 1
 * 	Quinn Knapper - 10/12/2017
 * 	Nessecary Files: {Runner.java, Course.java}
 * 	Input and store disc golf/golf score card data including:
 * 		- Name	- Date	- Number of Holes
 * 		- Pars	- Scores	- Over and Under Par
 */

import java.util.Scanner;
import java.io.File;
import java.io.FileWriter;
import java.io.BufferedWriter;
import java.io.IOException;

public class Runner
{
	public static File log;
	
	public static void main(String[] args)
	{
		Scanner scan = new Scanner(System.in);
		String logLocation;
		String courseName;
		String courseDate;
		boolean preexist;
		int numHoles;
		
		System.out.println("Disc Golf Tracker v. 1.0\tQuinn Knapper - 2017\n\n");	
		System.out.print("Do you already have a log?(Y/N):\t");
		preexist = scan.nextLine().equalsIgnoreCase("Y");
			
		if(preexist)
		{
			System.out.print("\tInput log file location with double backslashes(\\\\):\t");
			logLocation = scan.nextLine();
			log = new File(logLocation);
		}
		else
		{
			System.out.print("\tInput new log file location with double backslashes(\\\\):\t");
			logLocation = scan.nextLine();
			log = new File(logLocation);
			try
			   	{ log.createNewFile(); }
			catch(IOException e)
				{ e.printStackTrace(); }
		}
			
		System.out.print("\nCourse name:\t");
		courseName = scan.nextLine();
		System.out.print("Date (mm-dd-yyyy):\t");
		courseDate = scan.nextLine();
		System.out.print("Number of holes:\t");
		numHoles = scan.nextInt();
		System.out.println();
		
		Course course = new Course(courseName, courseDate, numHoles);
		
		for(int i = 1; i <= numHoles; i++)
		{
			System.out.print("Hole " + i + "-\n\tPar:\t");
			course.setPar(i, scan.nextInt());
			System.out.print("\tScore:\t");
			course.setScore(i, scan.nextInt());
			System.out.println("\t+/- :\t" + course.setPlusMinus(i) + "\tTotal: " + course.getTotalPlusMinus());
		}
		
		System.out.println("\nTotals -\n\tPar:\t" + course.getTotalPar());
		System.out.println("\tScore:\t" + course.getTotalScore());
		System.out.println("\t+/- :\t" + course.getTotalPlusMinus());
				
		writeText(course, preexist);
		
		scan.close();
	}
		
	public static void writeText(Course crs, boolean logical)
	{
		try
		{
	        String texxt;
			String old = "";
	        Scanner fileScan = new Scanner(log);
	               	
        	while(fileScan.hasNextLine())
            {
               	String temp = fileScan.nextLine();
               	old += temp + "\r\n";
            }
        	   
            if(logical)
            	texxt = old.replace("Disc Golf Tracker v. 1.0\tQuinn Knapper - 2017\r\n---", crs.toString());
            else
            	texxt = crs.toString();
           
            FileWriter fw = new FileWriter(log);
        	BufferedWriter bw = new BufferedWriter(fw);
            bw.write(texxt);
            bw.close();
            fileScan.close();
		}
		catch(IOException e)
		{
			e.printStackTrace();
		}
	}
}
