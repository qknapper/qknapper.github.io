/*
 * Disc Golf Tracker v. 1
 * 	Quinn Knapper - 10/12/2017
 * 	Nessecary Files: {Runner.java, Course.java}
 * 	Input and store disc golf/golf score card data including:
 * 		- Name	- Date	- Number of Holes
 * 		- Pars	- Scores	- Over and Under Par
 */

public class Course 
{
	private String name;
	private String date;
	private int holes;
	private int par[];
	private int totalPar;
	private int score[];
	private int totalScore;
	private int plusMinus[];
	private int totalPlusMinus = 0;

	Course(String str, String dte, int num)
	{
		name = str;
		date = dte;
		holes = num;
		par = new int[num];
		score = new int[num];
		plusMinus = new int[num];
	}
	
	public void setPar(int holeNum, int parNum)
	{
		par[holeNum-1] = parNum;
		totalPar += parNum;
	}
		
	public void setScore(int holeNum, int scoreNum)
	{
		score[holeNum-1] = scoreNum;
		totalScore += scoreNum;
	}
	
	public int setPlusMinus(int holeNum)
	{
		plusMinus[holeNum-1] = score[holeNum-1] - par[holeNum-1];
		totalPlusMinus += plusMinus[holeNum-1];
		return plusMinus[holeNum-1];
	}
	
	public String getName()
	{
		return name;
	}
	
	public String getDate()
	{
		return date;
	}
	
	public int getPar(int holeNum)
	{
		return par[holeNum-1];
	}
	
	public int getTotalPar()
	{
		return totalPar;
	}
	
	public int getScore(int holeNum)
	{
		return score[holeNum-1];
	}
	
	public int getTotalScore()
	{
		return totalScore;
	}
	
	public int getPlusMinus(int holeNum)
	{
		return plusMinus[holeNum-1];
	}
	
	public int getTotalPlusMinus()
	{
		return totalPlusMinus;
	}
	
	public String toString()
	{
		String out = "Disc Golf Tracker v. 1.0\tQuinn Knapper - 2017\r\n---\r\n" + name + "\t" + date + "\r\n\t\t| ";
		for(int i = 1; i <= holes; i++)
			out += i + " |\t";
		out += "\r\n\tPar\t| ";
		for(int i = 0; i < par.length; i++)
			out += par[i] + " |\t";
		out += totalPar + "\r\n\tScore\t| ";
		for(int i = 0; i < score.length; i++)
			out += score[i] + " |\t";
		out += totalScore + "\r\n\t+\\-\t| ";
		for(int i = 0; i < plusMinus.length; i++)
			out += plusMinus[i] + " |\t";
		out += totalPlusMinus + "\r\n---";
		
		return out;
	}
}
