import{bP as n,r as p,aV as e,bC as o}from"./index.6def9867.js";const l=n("productOptions",()=>{const s=p({brands:[],productTypes:[],productRanges:[]}),r=async()=>{try{const{data:t}=await e.get("/system/product-options");s.value=t}catch(t){o(t,!1)}};return{productOptions:s,getProductOptions:r,createProductOption:async t=>{try{await e.post(`/system/${t.type}`,t.data),await r()}catch(a){o(a,!1)}},deleteProductOption:async({type:t,id:a})=>{try{await e.delete(`/system/${t}/${a}`),await r()}catch(c){o(c,!1)}},updateProductOption:async t=>{try{await e.patch(`/system/${t.type}/${t.id}`,t.data),await r()}catch(a){o(a,!1)}}}});export{l as u};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vcHRpb25zLjc4YTk0NzdjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RvcmVzL3Byb2R1Y3Qtb3B0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCB7IHJvY3VtZW50c0FwaSB9IGZyb20gJ3NyYy9ib290L2F4aW9zJztcbmltcG9ydCBhcGlFcnJvckhhbmRsZXIgZnJvbSAnc3JjL3V0aWxzL2V4Y2VwdGlvbnMvYXBpLWVycm9yLWhhbmRsZXInO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFBST0RVQ1RfT1BUSU9OIH0gZnJvbSAnc3JjL0B0eXBlcy9wcm9kdWN0LW9wdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBST0RVQ1RfT1BUSU9OUyB7XG4gIGJyYW5kczogUFJPRFVDVF9PUFRJT05bXTtcbiAgcHJvZHVjdFR5cGVzOiBQUk9EVUNUX09QVElPTltdO1xuICBwcm9kdWN0UmFuZ2VzOiBQUk9EVUNUX09QVElPTltdO1xufVxuXG5leHBvcnQgY29uc3QgdXNlUHJvZHVjdE9wdGlvbnNTdG9yZSA9IGRlZmluZVN0b3JlKCdwcm9kdWN0T3B0aW9ucycsICgpID0+IHtcbiAgY29uc3QgcHJvZHVjdE9wdGlvbnMgPSByZWY8UFJPRFVDVF9PUFRJT05TPih7XG4gICAgYnJhbmRzOiBbXSxcbiAgICBwcm9kdWN0VHlwZXM6IFtdLFxuICAgIHByb2R1Y3RSYW5nZXM6IFtdLFxuICB9KTtcblxuICBjb25zdCBnZXRQcm9kdWN0T3B0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByb2N1bWVudHNBcGkuZ2V0PFBST0RVQ1RfT1BUSU9OUz4oXG4gICAgICAgICcvc3lzdGVtL3Byb2R1Y3Qtb3B0aW9ucydcbiAgICAgICk7XG4gICAgICBwcm9kdWN0T3B0aW9ucy52YWx1ZSA9IGRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFwaUVycm9ySGFuZGxlcihlcnJvciwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9kdWN0T3B0aW9uID0gYXN5bmMgKHByb2R1Y3RPcHRpb246IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgZGF0YTogUGFydGlhbDxQUk9EVUNUX09QVElPTj47XG4gIH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgcm9jdW1lbnRzQXBpLnBvc3Q8UFJPRFVDVF9PUFRJT04+KFxuICAgICAgICBgL3N5c3RlbS8ke3Byb2R1Y3RPcHRpb24udHlwZX1gLFxuICAgICAgICBwcm9kdWN0T3B0aW9uLmRhdGFcbiAgICAgICk7XG4gICAgICBhd2FpdCBnZXRQcm9kdWN0T3B0aW9ucygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhcGlFcnJvckhhbmRsZXIoZXJyb3IsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvZHVjdE9wdGlvbiA9IGFzeW5jICh7XG4gICAgdHlwZSxcbiAgICBpZCxcbiAgfToge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHJvY3VtZW50c0FwaS5kZWxldGU8UFJPRFVDVF9PUFRJT04+KGAvc3lzdGVtLyR7dHlwZX0vJHtpZH1gKTtcbiAgICAgIGF3YWl0IGdldFByb2R1Y3RPcHRpb25zKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFwaUVycm9ySGFuZGxlcihlcnJvciwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9kdWN0T3B0aW9uID0gYXN5bmMgKHVwZGF0ZToge1xuICAgIGRhdGE6IFBhcnRpYWw8UFJPRFVDVF9PUFRJT04+O1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBpZDogc3RyaW5nO1xuICB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHJvY3VtZW50c0FwaS5wYXRjaDxQUk9EVUNUX09QVElPTj4oXG4gICAgICAgIGAvc3lzdGVtLyR7dXBkYXRlLnR5cGV9LyR7dXBkYXRlLmlkfWAsXG4gICAgICAgIHVwZGF0ZS5kYXRhXG4gICAgICApO1xuICAgICAgYXdhaXQgZ2V0UHJvZHVjdE9wdGlvbnMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYXBpRXJyb3JIYW5kbGVyKGVycm9yLCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvZHVjdE9wdGlvbnMsXG4gICAgZ2V0UHJvZHVjdE9wdGlvbnMsXG4gICAgY3JlYXRlUHJvZHVjdE9wdGlvbixcbiAgICBkZWxldGVQcm9kdWN0T3B0aW9uLFxuICAgIHVwZGF0ZVByb2R1Y3RPcHRpb24sXG4gIH07XG59KTtcbiJdLCJuYW1lcyI6WyJ1c2VQcm9kdWN0T3B0aW9uc1N0b3JlIiwiZGVmaW5lU3RvcmUiLCJwcm9kdWN0T3B0aW9ucyIsInJlZiIsImdldFByb2R1Y3RPcHRpb25zIiwiZGF0YSIsInJvY3VtZW50c0FwaSIsImVycm9yIiwiYXBpRXJyb3JIYW5kbGVyIiwicHJvZHVjdE9wdGlvbiIsInR5cGUiLCJpZCIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6ImdFQVlhLE1BQUFBLEVBQXlCQyxFQUFZLGlCQUFrQixJQUFNLENBQ3hFLE1BQU1DLEVBQWlCQyxFQUFxQixDQUMxQyxPQUFRLENBQUMsRUFDVCxhQUFjLENBQUMsRUFDZixjQUFlLENBQUMsQ0FBQSxDQUNqQixFQUVLQyxFQUFvQixTQUFZLENBQ2hDLEdBQUEsQ0FDRixLQUFNLENBQUUsS0FBQUMsQ0FBQSxFQUFTLE1BQU1DLEVBQWEsSUFDbEMseUJBQUEsRUFFRkosRUFBZSxNQUFRRyxRQUNoQkUsR0FDUEMsRUFBZ0JELEVBQU8sRUFBSyxDQUM5QixDQUFBLEVBaURLLE1BQUEsQ0FDTCxlQUFBTCxFQUNBLGtCQUFBRSxFQUNBLG9CQWpEMEIsTUFBT0ssR0FHN0IsQ0FDQSxHQUFBLENBQ0YsTUFBTUgsRUFBYSxLQUNqQixXQUFXRyxFQUFjLE9BQ3pCQSxFQUFjLElBQUEsRUFFaEIsTUFBTUwsRUFBa0IsUUFDakJHLEdBQ1BDLEVBQWdCRCxFQUFPLEVBQUssQ0FDOUIsQ0FBQSxFQXNDQSxvQkFuQzBCLE1BQU8sQ0FDakMsS0FBQUcsRUFDQSxHQUFBQyxDQUFBLElBSUksQ0FDQSxHQUFBLENBQ0YsTUFBTUwsRUFBYSxPQUF1QixXQUFXSSxLQUFRQyxHQUFJLEVBQ2pFLE1BQU1QLEVBQWtCLFFBQ2pCRyxHQUNQQyxFQUFnQkQsRUFBTyxFQUFLLENBQzlCLENBQUEsRUF3QkEsb0JBckIwQixNQUFPSyxHQUk3QixDQUNBLEdBQUEsQ0FDRixNQUFNTixFQUFhLE1BQ2pCLFdBQVdNLEVBQU8sUUFBUUEsRUFBTyxLQUNqQ0EsRUFBTyxJQUFBLEVBRVQsTUFBTVIsRUFBa0IsUUFDakJHLEdBQ1BDLEVBQWdCRCxFQUFPLEVBQUssQ0FDOUIsQ0FBQSxDQVFBLENBRUosQ0FBQyJ9