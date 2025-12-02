import React, { useState } from 'react';
import Navbar from './frontend/components/Navbar';
import AuditInput from './frontend/components/AuditInput';
import AuditReportView from './frontend/components/AuditReportView';
import { analyzeSecurityPlan } from './backend/auditService';
import { AuditState, AuditInputData } from './types';
import { AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [auditState, setAuditState] = useState<AuditState>({
    status: 'idle',
    report: null,
    error: null,
  });

  const handleAnalyze = async (data: AuditInputData) => {
    setAuditState({ status: 'analyzing', report: null, error: null });
    
    try {
      const report = await analyzeSecurityPlan(data);
      setAuditState({ status: 'complete', report, error: null });
    } catch (error) {
      console.error(error);
      setAuditState({ 
        status: 'error', 
        report: null, 
        error: "Hubo un error al procesar el plan con la IA. Verifica tu API KEY, el formato del archivo o intenta nuevamente." 
      });
    }
  };

  const handleReset = () => {
    setAuditState({ status: 'idle', report: null, error: null });
  };

  return (
    <div className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {auditState.error && (
          <div className="max-w-3xl mx-auto mb-8 bg-rose-500/10 border border-rose-500/50 p-4 rounded-lg flex items-center gap-3 text-rose-200">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{auditState.error}</p>
            <button 
              onClick={() => setAuditState(s => ({ ...s, error: null, status: 'idle' }))}
              className="ml-auto text-sm hover:underline"
            >
              Cerrar
            </button>
          </div>
        )}

        {auditState.status === 'idle' || auditState.status === 'analyzing' ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
             <AuditInput 
               onAnalyze={handleAnalyze} 
               isAnalyzing={auditState.status === 'analyzing'} 
             />
          </div>
        ) : (
          auditState.report && (
            <AuditReportView 
              report={auditState.report} 
              onReset={handleReset} 
            />
          )
        )}
      </main>
    </div>
  );
};

export default App;