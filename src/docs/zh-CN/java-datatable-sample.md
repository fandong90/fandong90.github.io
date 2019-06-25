#  拿来主义到造轮子  -- java DataTable 实现

*  技术转型，net dataTable 的开箱即用，到java 的自我封装

*  背景

	前端VUE + 中台 +  后台数据库 +（hadoop 大数据处理）
	
	技术变革web服务有IIS 小作坊到拥抱公司技术体系。
	
	后台数据库使用的高性能的内存分布式数据库，中台进行数据的逻辑处理，前端接收 中台返回的json数据。
	
	---
	
* 愿景

    使用java 8 新特性 lamda 表达式结合，实现net linq 丝滑的特性使用。
    
* 技术实现

    中台获取的数据使用通过平台获取一串json数据，当然有好多工具可以进行处理，习惯了net dataTable的方式，总感觉怪怪。 JSONOBJ 实体对象也可以处理。但会遇到很多问题。
    
    1， 使用时类型NULL判断，强转，
    2, 多个条件判断取值，代码冗余。
    3, 获取值得比较null问题转换。
    
    
    
技术实现一体化解决方案

    1、json 字符串使用时，转换成json对象，这一步我在实现中使用正则表达判断字符串线性转成dataTable 对象。
    
    2、datatable 获取处理前 filterexpression  处理，对于简单的组合如 and 、 or
      between and  in  not in 等组合可以根据，设定的表达树进行解析，这里避免了NULL的处理
      
    3、结合lambda 表达式做后续的处理。
    
    
*  dataTable 优势

	类型的是强类型的，在 实现datatable 时可以进行value 的检测，避免error类型。
	
	植入的expression ，简化了lambda表达式求值问题，一定程度上避免null 比较问题。
	
	简化了代码。
	
*  主要代码

   首先简单构造一个datatable对象，
   dataTable 对象包含了dataRow ,dataColumn Deng.

   DataTable.java
   
   ```
       /**
	 *
	 * 创建一个dataTable
	 * @auth fandong
	 */
	public class DataTable {
	
	    private  String tableName;
	
	    private  long   rowIndex=0;
	
	    //获取columns列的集合
	
	    public DataColumnCollection columns;
	
	    private List<DataRow>  rows;
	
	    public DataTable(){
	       this.columns = new DataColumnCollection();
	       this.rows    = new ArrayList<DataRow>();
	    }
	
	    public DataTable(String name){
	        this.tableName = name;
	        this.columns = new DataColumnCollection();
	        this.rows    = new ArrayList<DataRow>();
	    }
	
	    public void addDataColumn(DataColumn dataColumn)throws Exception{
	        this.columns.Add(dataColumn);
	    }
	
	    /**
	     * 添加行数
	     * @param row
	     */
	    public void AddDataRow(DataRow row){
	        this.rows.add(row);
	    }
	
	    /**
	     * 添加列数
	     * @return
	     */
	    public List<DataColumn> getColumns(){
	        return this.columns.getColumns();
	    }
	
	    public List<DataRow>  getRows(){
	        return this.rows;
	    }
	
	    /**
	     * 获取dataTable的行数
	     * @return
	     */
	    public List<DataRow>  select(){
	
	
	        return this.rows;
	    }
	
	    public List<DataRow> select(String filterExpression) throws Exception{
	        ExpressionEngine ee = new ExpressionEngine(this);
	        StringTemplate stringTemplate = new StringTemplate();
	        ExpressionTree expressionTree= 			 stringTemplate.getSampleSqlResolve(filterExpression);
	        return  ee.getSampleExpressionResult(expressionTree);
	    }
	
	    public DataRow newRow(){
	        return new DataRow(this,this.rowIndex++);
	    }
	
	    /**
	     * 增加一行
	     * @param dataRow
	     */
	    public void addRow(DataRow dataRow){
	        this.rows.add(dataRow);
	    }
	

    }
   
   ```
   
   DataColumn.java
   
   ```
    /**
	 * @auth fandong
	 */
	public class DataColumn {
	
	    private String columnName;
	
	    private Type   dataType;
	
	    //设定字符长度
	    private int    charLength;
	
	    public DataColumn(String name, Type dataType){
	        this.columnName=name.toUpperCase();
	        this.dataType = dataType;
	    }
	
	    public String getColumnName() {
	        return columnName;
	    }
	
	    public void setColumnName(String columnName) {
	        this.columnName = columnName.toUpperCase();
	    }
	
	    public Type getDataType() {
	        return dataType;
	    }
	
	    public void setDataType(Type dataType) {
	        this.dataType = dataType;
	    }
	
	    public int getCharLength() {
	        return charLength;
	    }
	
	    public void setCharLength(int charLength) {
	        this.charLength = charLength;
	    }
	}

   
   ```
   
   DataColumnCollection.java
   
   ```
        public class DataColumnCollection{

    /**
     * 获取集合中元素的个数
     */
    private int count;

    /***
     * 当前列的pos
     */
    private int index;

    private List<DataColumn> innerlist;

    public DataColumnCollection(){
        this.innerlist = new ArrayList<DataColumn>();
        this.index=0;
        this.count=0;
    }

    public void Add(DataColumn column) throws Exception{

        if(this.innerlist.contains(column)){
            throw new Exception("DataColumnCollection has exists !");
        }

        this.innerlist.add(this.index++,column);
        this.count++;

    }

    //获取列的个数
    public int getSize(){
        return this.count;
    }

    protected List<DataColumn> getColumns(){
        return this.innerlist;
    }

    /**
     * 判断dataTable 列中是否包含数据列
     * @param columnName
     * @return
     */
    protected  boolean contains(String columnName){

        boolean isExists=false;
        Iterator<DataColumn> iterator = this.innerlist.iterator();
        while(iterator.hasNext() && !isExists){
            DataColumn dataColumn= iterator.next();
            if(dataColumn.getColumnName().equals(columnName)){
                isExists=true;
            }
        }
        return isExists;
    }

    public DataColumn getDataColumn(String columnName) throws Exception{
        DataColumn dataColumn =null;
        boolean isExists=false;
        Iterator<DataColumn> iterator = this.innerlist.iterator();
        while(iterator.hasNext() && !isExists){
            dataColumn= iterator.next();
            if(dataColumn.getColumnName().compareToIgnoreCase(columnName) ==0){
                isExists=true;
            }
        }
        if(dataColumn ==null){
            throw new Exception(" find Column not exists");
        }
        return dataColumn;
    }
   }
   
   ```
   
   DataRow.java
   
   ```
   
   public class DataRow {

   private Map<String,Object> itemArray;

   protected   DataTable dataTable;

   private  long innerIndex=0;

   //创建唯一标识
   private long timeStamp;

   public DataRow(DataTable dataTable,long index){
       this.dataTable = dataTable;
       this.itemArray = new HashMap<String, Object>();
       innerIndex= index;
       this.itemArray.put("INNER_TIME_STAMP",innerIndex);
   }


    /**
     * 设置数据列
     * @param columnName
     * @param val
     */
   public void setDataColumn(final String columnName, Object val) throws Exception{
       if(!this.dataTable.columns.contains(columnName.toUpperCase())){
           throw new Exception("DataTable Columns not exists column Name: "+ columnName);
       }
       if(this.itemArray.containsKey(columnName.toUpperCase())){
           throw new Exception("dataRow Columns has exists column Name: "+ columnName);
       }

       this.itemArray.put(columnName.toUpperCase(),val);
   }

     /***
     * 获取数列的值
     * @param columnName
     */
    public Object getDataColumnVal(String columnName){
       return this.itemArray.get(columnName);
    }





    @Override
    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        Iterator<DataColumn> iterator = this.dataTable
                                        .columns
                                        .getColumns()
                                        .iterator();
        while(iterator.hasNext()){
            DataColumn dataColumn = iterator.next();
            Object  val =null;
            if(this.itemArray.containsKey(dataColumn.getColumnName())){
                val = this.itemArray.get(dataColumn.getColumnName());
            }
            stringBuilder.append(", "+dataColumn.getColumnName() +" = "+val);
        }
        stringBuilder.append(","+this.itemArray.get("INNER_TIME_STAMP"));
        return stringBuilder.append("\r\n").toString().substring(1);
    }


    }
   
   ```
   
   使用：
   
   ```
         public static void main(String[] args) throws Exception {
        
		    DataTable dataTable = new DataTable();
		    DataColumn dataColumn1 = new DataColumn("column1",String.class);
		    DataColumn dataColumn2 = new DataColumn("column2",Integer.class);
		    DataColumn dataColumn3 = new DataColumn("column3",String.class);
		    dataTable.addDataColumn(dataColumn1);
		    dataTable.addDataColumn(dataColumn2);
		    dataTable.addDataColumn(dataColumn3);
		    DataRow dataRow = null;
		    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");//设置日期格式
		    System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
		    for(int i=1;i<10000;i++){
		        dataRow = dataTable.newRow();
		        dataRow.setDataColumn("column1",i);
		        dataRow.setDataColumn("column2",i);
		        dataRow.setDataColumn("column3","hehe"+String.valueOf(i));
		        dataTable.addRow(dataRow);
		    }
    }
       
   ```
   
   ::: success
   
       构建一个datatable 似乎很容易，但这不是我讲的重点，重点是构建
       filterexpression
       
   :::
   
* ExpressionTree 的构建

  如何解析 String sqlWhere ="  column1 = 1 and column2 = '3' or ..."等 拼接组合。
  
  这个还涉及了一个 or and 优先级的问题，between  and  这个 和 and 的区分，额。。， in （）
  
  说我按照字符串解析读取各个关系，最后组装起来，一个个的解析，你可能是这样做的
  
    * 读取了字符串  column1 = 1 ，我去获取 =1 的值，后面有 column2 =2 我去获取的值，遇到了or
    *  继续解析，or的目的是结果集求和合集。。。。太麻烦了，如果复杂都在业务代码分开取，整个人感觉都不好了。

* 思路

  建立一个表达树，对于简单的sql语句查询，只有一个根节点，根节点可以有1一个或者多个子节点，但是2级子节点的后代只能是独苗。
  
  ![tu](https://fandong90.github.io/dist/static/img/datatableexpression.png)
  

ExpressionTree.java

```
	/***
 *
 * sql where 条件形成时，节点树根节点是虚拟节点，并且一个树中只有一个虚拟节点
 */
 public class ExpressionTree {

    //标记节点
    private boolean isLabelNode;

    //是否为根节点
    private boolean isRootNode;

    //是否有子节点
    private  boolean isHasChildNode;

    //当前节点的层级
    private int currentNodeLevel;

    //当前节点的类型
    private int currentNodeType;

    //当前sql字符串
    private SqlKeyOperate sqlText;

    public SqlKeyOperate getSqlText() {
        return sqlText;
    }

    public void setSqlText(SqlKeyOperate sqlText) {
        this.sqlText = sqlText;
    }

    private  int index=0;

    public int getCurrentNodeType() {
        return currentNodeType;
    }

    public void setCurrentNodeType(int currentNodeType) {
        this.currentNodeType = currentNodeType;
    }

    /**
     *
     * 只有虚拟节点才可以有多个子节点
     */
    private List<ExpressionTree> childNodes;

    /**
     * 只有一个父节点
     */
    private  ExpressionTree  parentNode;

    public boolean isLabelNode() {
        return isLabelNode;
    }

    public void setLabelNode(boolean labelNode) {
        isLabelNode = labelNode;
    }

    public boolean isRootNode() {
        return isRootNode;
    }

    public void setRootNode(boolean rootNode) {
        isRootNode = rootNode;
    }

    /***
     * 判断是否有子节点
     * @return
     */
    public boolean isHasChildNode() {
        return isHasChildNode;
    }

    /**
     * 标识是否有子节点
     * @param hasChildNode
     */

    public void setHasChildNode(boolean hasChildNode) {
        isHasChildNode = hasChildNode;
    }

    public List<ExpressionTree> getChildNodes() {
        return childNodes;
    }

    /**
     *
     * 增加子节点
     * @param node
     */
    public void add(ExpressionTree node) {

        if(this.childNodes == null){
            this.childNodes = new ArrayList<ExpressionTree>();
            this.setHasChildNode(true);
        }
        // this.childNodes = childNodes;
        this.childNodes.add(this.index++,node);
    }

    /**
     * 获取父节点
     * @return
     */
    public ExpressionTree getParentNode() {
        return parentNode;
    }

    /**
     * 设置父节点
     * @param parentNode
     */
    public void setParentNode(ExpressionTree parentNode) {
        this.parentNode = parentNode;
    }

    /***
     * 当前层级
     * @return
     */
    public int getCurrentNodeLevel() {
        return currentNodeLevel;
    }

    public void setCurrentNodeLevel(int currentNodeLevel) {
        this.currentNodeLevel = currentNodeLevel;
    }
}

```


StringTemplate.java

```
   //字符串模板解析
   // 示例所有的字符串都是经过处理的
   // 如：" column2 > 9000 or column2 = 1 and column3 = 'hehe3' "
   
   public class StringTemplate {

    /**
     * 在方法中不考虑括号改变优先级的情况，实际上参数字符串已做了处理，
     * 此处不会有这种情况出现。
     * 生成的表达树，有且只有一个根节点
     * @auth fandong
     * @param sqlCondition
     * @return
     */
    public ExpressionTree getSampleSqlResolve(String sqlCondition) throws Exception{

        /**
         * 编译选取模板需要重新定义
          */

        String[] textArray= sqlCondition.trim()
                                .toUpperCase()
                                .split("\\s+");


       if(textArray.length>0 && (textArray[0]=="OR" || textArray[0]=="AND" || textArray[0]=="(")){
           throw new Exception("sql rexpression error :"+sqlCondition);
        }

       int textCount=textArray.length;
       int nodeLevel=1;
       ExpressionTree rootNode = new ExpressionTree();
       rootNode.setLabelNode(true);
       rootNode.setRootNode(true);
       rootNode.setCurrentNodeLevel(nodeLevel);
       rootNode.setCurrentNodeType(NODE_CROSS_OR);
       ExpressionTree childNode =null;

       //记录上一个节点
       ExpressionTree beforeNode =rootNode;

       //在 AND 或者 OR 节点前是否遇到了Between节点
        boolean beforeMeetBetween =false;
        boolean beforeMeetIN      =false;
        boolean beforeMeetNotIN   =false;

       for(int i=0;i<textCount;i++){

        for(int j=i+1;j<textCount;j++){
            if(textArray[j].compareToIgnoreCase("BETWEEN")==0){
                nodeLevel +=1;
                childNode = new ExpressionTree();
                childNode.setLabelNode(false);
                if(nodeLevel==2){
                    rootNode.add(childNode);
                    childNode.setParentNode(rootNode);

                }else{
                    childNode.setParentNode(beforeNode);
                    beforeNode.add(childNode);
                }
                beforeNode =childNode;
                SqlKeyOperate sqlText= new SqlKeyOperate();
                childNode.setCurrentNodeType(NODE_CROSS_BETWEEN);
                sqlText = getSampleSqlOperate(textArray,j,NODE_CROSS_BETWEEN);
                childNode.setSqlText(sqlText);
                childNode.setCurrentNodeLevel(nodeLevel);

                //移动pos
                i+= sqlText.getMatchArr().length+1;
                beforeMeetBetween=true;
                break;
            }else if(textArray[j].compareToIgnoreCase("NOT")==0){
                nodeLevel +=1;
                childNode = new ExpressionTree();
                childNode.setLabelNode(false);
                if(nodeLevel==2){
                    rootNode.add(childNode);
                    childNode.setParentNode(rootNode);

                }else{
                    childNode.setParentNode(beforeNode);
                    beforeNode.add(childNode);
                }
                beforeNode =childNode;
                childNode.setCurrentNodeType(NODE_CROSS_NOT_IN);
                SqlKeyOperate sqlText= new SqlKeyOperate();
                sqlText = getSampleSqlOperate(textArray,j+1,NODE_CROSS_NOT_IN);
                childNode.setSqlText(sqlText);
                childNode.setCurrentNodeLevel(nodeLevel);
                //移动pos
                i+= sqlText.getMatchArr().length+3;
                beforeMeetNotIN=true;
                break;
            }else if(textArray[j].compareToIgnoreCase("IN")==0){
                nodeLevel +=1;
                childNode = new ExpressionTree();
                childNode.setLabelNode(false);
                if(nodeLevel==2){
                    rootNode.add(childNode);
                    childNode.setParentNode(rootNode);

                }else{
                    childNode.setParentNode(beforeNode);
                    beforeNode.add(childNode);
                }
                beforeNode =childNode;
                childNode.setCurrentNodeType(NODE_CROSS_IN);
                SqlKeyOperate sqlText= new SqlKeyOperate();
                sqlText = getSampleSqlOperate(textArray,j,NODE_CROSS_IN);
                childNode.setSqlText(sqlText);
                childNode.setCurrentNodeLevel(nodeLevel);
                //移动pos
                i =i+sqlText.getMatchArr().length+2;
                beforeMeetIN=true;
                break;
            }else if(textArray[j].compareToIgnoreCase("AND")==0){
                if(beforeMeetBetween || beforeMeetIN || beforeMeetNotIN){
                    beforeMeetBetween=false;
                    beforeMeetIN=false;
                    beforeMeetNotIN=false;
                    i =j;
                    break;
                }
                nodeLevel +=1;
                childNode = new ExpressionTree();
                childNode.setLabelNode(false);
                if(nodeLevel==2){
                    rootNode.add(childNode);
                    childNode.setParentNode(rootNode);

                }else{
                    childNode.setParentNode(beforeNode);
                    beforeNode.add(childNode);
                }
                beforeNode =childNode;
                childNode.setCurrentNodeType(NODE_CROSS_AND);
                String[] valArr= new String[j-i];
                for(int k=0;k<valArr.length;k++){
                    valArr[k] =textArray[i+k];
                }
                SqlKeyOperate sqlText= new SqlKeyOperate();
                sqlText.setMatchArr(valArr);
                sqlText.setColumnName(valArr[0]);
                sqlText.setSysmbol(NODE_CROSS_AND);
                childNode.setSqlText(sqlText);
                childNode.setCurrentNodeLevel(nodeLevel);
                //移动pos
                i = i+sqlText.getMatchArr().length;
                break;
            }else if(textArray[j].compareToIgnoreCase("OR")==0){

                if(beforeMeetBetween || beforeMeetIN || beforeMeetNotIN){
                    beforeMeetBetween=false;
                    beforeMeetIN=false;
                    beforeMeetNotIN=false;
                    nodeLevel = 1;
                    i =j;
                    break;
                }

                /**
                 * 在OR前面是一个表达式
                 */
                nodeLevel +=1;
                childNode = new ExpressionTree();
                childNode.setLabelNode(false);
                if(nodeLevel==2){
                    rootNode.add(childNode);
                    childNode.setParentNode(rootNode);

                }else{
                    childNode.setParentNode(beforeNode);
                    beforeNode.add(childNode);
                }
                beforeNode =childNode;
                childNode.setCurrentNodeType(NODE_CROSS_AND);
                String[] valArr= new String[j-i];
                for(int k=0;k<valArr.length;k++){
                    valArr[k] =textArray[i+k];
                }
                SqlKeyOperate sqlText= new SqlKeyOperate();
                sqlText.setMatchArr(valArr);
                sqlText.setColumnName(valArr[0]);
                sqlText.setSysmbol(NODE_CROSS_AND);
                childNode.setSqlText(sqlText);
                childNode.setCurrentNodeLevel(nodeLevel);
                nodeLevel = 1;
                i =j;
                break;
            }

            //表示循环到最后了
            if(j==textCount-1){
                nodeLevel +=1;
                childNode = new ExpressionTree();
                childNode.setLabelNode(false);
                if(nodeLevel==2){
                    rootNode.add(childNode);
                    childNode.setParentNode(rootNode);

                }else{
                    childNode.setParentNode(beforeNode);
                    beforeNode.add(childNode);
                }
                beforeNode =childNode;
                childNode.setCurrentNodeType(NODE_CROSS_AND);
                String[] valArr= new String[j-i+1];
                for(int k=0;k<valArr.length;k++){
                    valArr[k] =textArray[i+k];
                }
                SqlKeyOperate sqlText= new SqlKeyOperate();
                sqlText.setMatchArr(valArr);
                sqlText.setSysmbol(NODE_CROSS_AND);
                sqlText.setColumnName(valArr[0]);
                childNode.setSqlText(sqlText);
                childNode.setCurrentNodeLevel(nodeLevel);
                //移动pos
                i+= sqlText.getMatchArr().length;
            }
        }

       }
       return rootNode;
    }

    /**
     * 解析sql 操作的语句
     * @param arr  解析的数据
     * @param sqlKeyPos sqlkey位置
     * @param nodeCrossType
     * @return
     */
    private SqlKeyOperate getSampleSqlOperate(String[] arr,int sqlKeyPos,int nodeCrossType) throws Exception {

        SqlKeyOperate sqlKeyOperate = new SqlKeyOperate();
        int rightBracketPos=-1;
        String[]  valArr= null;
        switch (nodeCrossType){
            case NODE_CROSS_BETWEEN:
                sqlKeyOperate.setColumnName(arr[sqlKeyPos-1]);
                sqlKeyOperate.setSysmbol(nodeCrossType);
                valArr = new String[2];
                valArr[0]=arr[sqlKeyPos+1];
                valArr[1]=arr[sqlKeyPos+3];
                sqlKeyOperate.setMatchArr(valArr);
                break;
            case NODE_CROSS_IN:
                sqlKeyOperate.setColumnName(arr[sqlKeyPos-1]);
                sqlKeyOperate.setSysmbol(NODE_CROSS_IN);
                rightBracketPos = getMatchBracketPos(arr,sqlKeyPos+1)-1;
                valArr = new String[rightBracketPos-sqlKeyPos-1];
                for(int j=0;j<valArr.length;j++){
                   valArr[j]=arr[j+sqlKeyPos+2];
                }
                sqlKeyOperate.setMatchArr(valArr);
                break;
            case NODE_CROSS_NOT_IN:
                sqlKeyOperate.setColumnName(arr[sqlKeyPos-2]);
                sqlKeyOperate.setSysmbol(NODE_CROSS_NOT_IN);
                rightBracketPos = getMatchBracketPos(arr,sqlKeyPos+1)-1;
                valArr = new String[rightBracketPos-sqlKeyPos-1];
                for(int j=0;j<valArr.length;j++){
                    valArr[j]=arr[j+sqlKeyPos+2];
                }
                sqlKeyOperate.setMatchArr(valArr);
                break;
        }

        return sqlKeyOperate;
    }

    /***
     * 获取匹配括号的位置,
     * 指定一个左括号的位置，返回对应的右括号
     * 此方法假设所有的括号都是配对的。
     * @param arr
     * @param firstBracketPos
     * @return
     */
    public int getMatchBracketPos(String[] arr,int leftBracketPos) throws Exception{
        Stack<String> bracketstack= new Stack<String>();
        for(int i=0;i<arr.length;i++){
            if(arr[i].compareTo("(")==0){
                if(i==leftBracketPos){
                    //标志匹配的左括号
                    bracketstack.push("*");
                }else{
                    bracketstack.push(arr[i]);
                }
            }else if(arr[i].compareTo(")")==0) {
                //第一个是有括号
                if (bracketstack.isEmpty()) {
                    throw new Exception("bracket not match ，first position right bracket");
                }
                String right = bracketstack.pop();
                if ("*".equals(right)) {
                    return i;
                }
            }
        }
        return -1;
    }


}
   
```

表达树的计算和解析

ExpressionRelation.java

```
     /**
 * 避免使用递归。
 * @auth fandong
 */
public class ExpressionRelation {


    /**
     * 获取表达式执行的顺序
     */
    private  int order;

    /**
     * 获取过滤的数据
     */
    private  List<DataRow>  dataRows;

    /**
     * 保存单条线集合
     */
    private List<ExpressionTree> nodes;

    /**
     * 表示数据是交集 还是 并集的关系
     */
    private  int  dataMergeType;

    private DataColumnCollection columns;

    private DataTable  dataTable;

    public ExpressionRelation(DataTable dt){
        this.columns =dt.columns;
        this.dataTable =dt;
    }

    public int getOrder() {
        return order;
    }

    public void setOrder(int order) {
        this.order = order;
    }

    public List<DataRow> getDataRows() {
        return dataRows;
    }

    public void setDataRows(List<DataRow> dataRows) {
        this.dataRows = dataRows;
    }

    public void setExpression(List<ExpressionTree> nodes) {
        this.nodes= nodes;
    }

    public int getDataMergeType() {
        return dataMergeType;
    }

    public void setDataMergeType(int dataMergeType) {
        this.dataMergeType = dataMergeType;
    }


    /**
     * 获取执行的结果集
     */
    public List<DataRow> getResult() throws Exception{

        Iterator<ExpressionTree> iterator = this.nodes.iterator();
        if(this.dataRows == null) this.dataRows = dataTable.getRows();

        /**
         * 用于处理IN 、NOT IN 的问题
         */
        List<DataRow>  beforeDataRow=null;
        int  INCount=0;

        while(iterator.hasNext()){

            ExpressionTree node = iterator.next();
            final SqlKeyOperate sqlText=node.getSqlText();
            DataColumn dataColumn = this.columns.getDataColumn(sqlText.getColumnName());
            String primitiveType= dataColumn.getDataType().toString().toUpperCase();
            IPrimitiveFactory primitiveFactory= new PrimitiveFactory(primitiveType).getInstance();

            if(sqlText.getSysmbol() == NODE_CROSS_AND){

                switch (sqlText.getMatchArr()[1]){
                    case "=":
                        this.dataRows=this.dataRows.stream().filter(
                                p-> primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName()))
                                        .compareToIgnoreCase(sqlText.getMatchArr()[2])==0
                        ).collect(Collectors.<DataRow>toList());
                        break;
                    case "<>":
                    case "!=":
                        this.dataRows=this.dataRows.stream().filter(
                                p-> primitiveFactory.parse(
                                        p.getDataColumnVal(sqlText.getColumnName()))
                                        .compareToIgnoreCase(sqlText.getMatchArr()[2])!=0
                        ).collect(Collectors.<DataRow>toList());
                        break;
                    case ">=":
                        this.dataRows=this.dataRows.stream().filter(
                                p-> primitiveFactory.parse(
                                        p.getDataColumnVal(sqlText.getColumnName()))
                                        .compareToIgnoreCase(sqlText.getMatchArr()[2])>=0
                        ).collect(Collectors.<DataRow>toList());
                        break;
                    case "<=":
                        this.dataRows=this.dataRows.stream().filter(
                                p-> primitiveFactory.parse(
                                        p.getDataColumnVal(sqlText.getColumnName()))
                                        .compareToIgnoreCase(sqlText.getMatchArr()[2])<=0
                        ).collect(Collectors.<DataRow>toList());

                        break;
                    case ">":
                        this.dataRows=this.dataRows.stream().filter(
                                p-> primitiveFactory.parse(
                                        p.getDataColumnVal(sqlText.getColumnName()))
                                        .compareToIgnoreCase(sqlText.getMatchArr()[2])>0
                        ).collect(Collectors.<DataRow>toList());

                        break;
                    case "<":
                        this.dataRows=this.dataRows.stream().filter(
                                p-> primitiveFactory.parse(
                                        p.getDataColumnVal(sqlText.getColumnName()))
                                        .compareToIgnoreCase(sqlText.getMatchArr()[2])<0
                        ).collect(Collectors.<DataRow>toList());
                        break;
                    case "LIKE":
                        this.dataRows= this.dataRows.stream().filter(
                                p->primitiveFactory.getLike(sqlText.getMatchArr()[2])==true
                        ).collect(Collectors.<DataRow>toList());
                        break;
                }
            }


             if(sqlText.getSysmbol() == NODE_CROSS_BETWEEN){

                 this.dataRows=this.dataRows.stream().filter(
                         p->primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName())).compareToIgnoreCase(sqlText.getMatchArr()[0])>=0
                                 &&
                                 primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName())).compareToIgnoreCase(sqlText.getMatchArr()[1])<=0
                   ).collect(Collectors.<DataRow>toList());
                 }

             if(sqlText.getSysmbol() == NODE_CROSS_IN){
                 INCount ++;
                 if(INCount ==1){
                     for(int i=0;i<sqlText.getMatchArr().length;i++){
                         Object val = sqlText.getMatchArr()[i];
                         this.dataRows=this.dataTable.getRows().stream().filter(
                                 p->primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName()))
                                         .compareToIgnoreCase(val)==0
                         ).collect(Collectors.<DataRow>toList());

                         this.dataRows = this.getMergerResult(this.dataRows,beforeDataRow);
                         beforeDataRow = this.dataRows;
                     }
                 }else {
                     List<DataRow> srcDataRow = this.dataRows.parallelStream().collect(Collectors.toList());
                     beforeDataRow =null;
                     for(int i=0;i<sqlText.getMatchArr().length;i++){
                         Object val = sqlText.getMatchArr()[i];
                         this.dataRows=srcDataRow.stream().filter(
                                 p->primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName()))
                                         .compareToIgnoreCase(val)==0
                         ).collect(Collectors.<DataRow>toList());

                         this.dataRows = this.getMergerResult(this.dataRows,beforeDataRow);
                         beforeDataRow = this.dataRows;
                     }
                 }


             }

             if(sqlText.getSysmbol() == NODE_CROSS_NOT_IN){
                 List<DataRow> srcDataRows = this.dataTable.getRows().stream().collect(Collectors.toList());
                 int notInExistsCount=0;
                 for(int i=0;i<sqlText.getMatchArr().length;i++){
                     Object val = sqlText.getMatchArr()[i];
                     this.dataRows=this.dataTable.getRows().stream().filter(
                             p->primitiveFactory.parse(p.getDataColumnVal(sqlText.getColumnName()))
                                     .compareToIgnoreCase(val)==0
                     ).collect(Collectors.<DataRow>toList());

                    for(DataRow dr : this.dataRows){
                       srcDataRows.remove(dr);
                    }
                 }
                 this.dataRows = srcDataRows;
             }

        }
        return this.dataRows;
    }

    /**
     * 融合结果值
     * 需要添加一个算法进行查找，使用二分法查找
     * @param rows1
     * @param rows2
     * @return
     */
    public List<DataRow> getMergerResult(List<DataRow> rows1,List<DataRow> rows2)
    {

        long result1Count=0,result2Count=0;
        if(rows1 == null && rows2 ==null){
            return new ArrayList<DataRow>();
        }
        if(rows1 !=null){
            result1Count = rows1.size();
        }

        if(rows2 !=null){
            result2Count = rows2.size();
        }

        if(result1Count>result2Count){
            if(rows2!=null){

                int r1Count = rows1.size();
                int r2Count = rows2.size();
                int[] row1Arr = new int[r1Count];

                for(int i=0;i<r1Count;i++){
                    row1Arr[i] = Integer.parseInt(rows1.get(i).getDataColumnVal("INNER_TIME_STAMP").toString());
                }

                Arrays.sort(row1Arr);

                for(int i=0;i<r2Count;i++){
                    DataRow dataRow = rows2.get(i);
                    if(binaryFind(row1Arr,Integer.parseInt(
                            dataRow
                            .getDataColumnVal("INNER_TIME_STAMP")
                            .toString())) ==-1)
                    {
                         rows1.add(dataRow);
                    }
                }


            }

            return rows1;

        }else {

            if(rows1!=null && rows2 !=null){

                int r1Count = rows1.size();
                int r2Count = rows2.size();


                int[] row2Arr = new int[r2Count];

                for(int i=0;i<r2Count;i++){
                    row2Arr[i] = Integer.parseInt(rows2.get(i).getDataColumnVal("INNER_TIME_STAMP").toString());
                }

                Arrays.sort(row2Arr);

                for(int i=0;i<r1Count;i++){
                    DataRow dataRow = rows1.get(i);
                    int result =binaryFind(row2Arr,Integer.parseInt(
                            dataRow
                                    .getDataColumnVal("INNER_TIME_STAMP")
                                    .toString()));
                    if( result == -1)
                    {
                        rows2.add(dataRow);
                    }
                }

            }
            if(rows2 == null){
                return new ArrayList<DataRow>();
            }
            return rows2;
        }
    }

    /**
     * 二分法查找，返回元素的位置
     * 返回 -1 怎标识不在
     * @param a
     * @param b
     * @return
     */
    protected int binaryFind(int a[],int b)
    {
        int mid,min=0,max;
        max=a.length-1;
        while(min<=max)
        {
            mid=min+(max-min)/2;
            if(b<a[mid])
            {
                max=mid-1;
            }
            else if(b>a[mid])
            {
                min=mid+1;
            }
            else
            {
                return mid+1;
            }
        }
        return -1;
    }


}

```
::: warnning

    一些其他的class 就不在展示了，如有需要下面邮箱联系我。
:::

实现结果：

```
 Iterator<DataRow> iterator = dataTable.select(" column1 not in ( 9 -1 11 34 ) and   column2 between 9 and 12 ").iterator();
        while(iterator.hasNext()){
        DataRow dataRow1= iterator.next();
        System.out.println(dataRow1.toString());
    }

    System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
```
dataTable 中有10000 行数据，这个解析式 column1 不能包含9 -1 11 34 而且 column2 的值必须在9-12 之间。

![result](https://fandong90.github.io/dist/static/img/datatableresultdemo.png)




   
      
    