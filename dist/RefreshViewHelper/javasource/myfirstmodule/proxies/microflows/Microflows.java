// This file was generated by Mendix Modeler 7.5.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies.microflows;

import java.util.HashMap;
import java.util.Map;
import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.MendixRuntimeException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class Microflows
{
	// These are the microflows for the MyFirstModule module
	public static java.util.List<myfirstmodule.proxies.EnttiyViewHelper> dSL(IContext context, myfirstmodule.proxies.Container _container)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			params.put("Container", _container == null ? null : _container.getMendixObject());
			java.util.List<IMendixObject> objs = Core.execute(context, "MyFirstModule.DSL", params);
			java.util.List<myfirstmodule.proxies.EnttiyViewHelper> result = null;
			if (objs != null)
			{
				result = new java.util.ArrayList<myfirstmodule.proxies.EnttiyViewHelper>();
				for (IMendixObject obj : objs)
					result.add(myfirstmodule.proxies.EnttiyViewHelper.initialize(context, obj));
			}
			return result;
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
	public static void iVK(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			Core.execute(context, "MyFirstModule.IVK", params);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
	public static myfirstmodule.proxies.Container microflow(IContext context)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			IMendixObject result = (IMendixObject)Core.execute(context, "MyFirstModule.Microflow", params);
			return result == null ? null : myfirstmodule.proxies.Container.initialize(context, result);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
	public static void toggle(IContext context, myfirstmodule.proxies.EnttiyViewHelper _enttiyViewHelper)
	{
		try
		{
			Map<java.lang.String, Object> params = new HashMap<java.lang.String, Object>();
			params.put("EnttiyViewHelper", _enttiyViewHelper == null ? null : _enttiyViewHelper.getMendixObject());
			Core.execute(context, "MyFirstModule.Toggle", params);
		}
		catch (CoreException e)
		{
			throw new MendixRuntimeException(e);
		}
	}
}